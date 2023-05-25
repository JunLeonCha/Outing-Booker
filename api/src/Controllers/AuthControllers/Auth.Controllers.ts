import { Request, Response } from "express"
import supabase from "../../db.js"
import { Connexion, Register } from "../../Models/Authentication/Authentication";
import { AES, enc } from "crypto-js";
import cryptojs from "crypto-js";

namespace Authentication {
    export class AuthenticationController {

        constructor() { }

        protected secretkey: string = "";

        SignIn = async (req: Request, res: Response) => {
            const { email, password } = req.body;
            const Login = new Connexion(email, password);
            const { data, error } = await supabase.auth.signInWithPassword({
                email: Login.email,
                password: Login.password,
            });

            if (data?.session?.user) {
                const { access_token, user: { id } } = data.session;

                // Récupérer toutes les données de la table "user" pour l'utilisateur connecté
                const { data: userData, error: fetchError } = await supabase
                    .from('users')
                    .select("id, firstname, lastname, city, postal_code")
                    .eq('id', id); // Filtrer par ID d'utilisateur

                if (fetchError) {
                    return res.status(400).json({ error: fetchError.message });
                }
                const user_data = userData ? userData[0] : {}; // Utilisez la première entrée du tableau des données

                // Crypter le jeton d'accès
                const encryptedToken = AES.encrypt(access_token, "0ut1ng-B00k3r-53cret-K3y").toString();

                // Enregistrer le cookie contenant le jeton d'accès crypté
                res.cookie('access_token', encryptedToken, { httpOnly: true });

                return res.json({ access_token: encryptedToken, id, user_data });
            }

            if (error) {
                return res.status(400).json({ error: error.message });
            }
        }

        // Logout
        SignOut = async (req: Request, res: Response) => {
            // Supprimer le cookie du jeton d'accès
            res.clearCookie('access_token');

            const logout = await supabase.auth.signOut();
            return res.json({ message: 'Déconnexion réussie' });
        }

        //Register
        SignUp = async (req: Request, res: Response) => {
            const { firstname, lastname, email, password } = req.body;
            const newRegister = new Register(firstname, lastname, email, password);
            const { error } = await supabase.auth.signUp({
                email: newRegister.email,
                password: newRegister.password,
                options: {
                    data: {
                        firstname: newRegister.firstname,
                        lastname: newRegister.lastname,
                        email: newRegister.email,
                        password: password,
                        phone: newRegister.phone,
                        created_at: new Date().toISOString(),
                    },
                },
            });

            if (error) {
                return res.status(500).send({ error: error.message });
            }

            return res.json({ message: 'Inscription réussie' });
        }
    }

}
export default new Authentication.AuthenticationController;