import { Request, Response } from "express";
import Supabase from "../../db";
import { Connexion, Register } from "../../Models/Authentication/Authentication";

namespace Authentication {
    export class AuthenticationController {
        private supabase = Supabase;
        SignIn = async (req: Request, res: Response) => {

            const { email, password } = req.body;
            const Login = new Connexion(email, password);
            const { data, error } = await this.supabase.supa().auth.signInWithPassword({
                email: Login.email,
                password: Login.password,
            });

            if (data?.session?.user) {
                console.log(data)
                const { access_token, user: { id } } = data.session;

                // Récupérer toutes les données de la table "user" pour l'utilisateur connecté
                const { data: userData, error: fetchError } = await this.supabase.supa()
                    .from('users')
                    .select("id, firstname, lastname, city, postal_code")
                    .eq('id', id); // Filtrer par ID d'utilisateur

                if (fetchError) {
                    return res.status(400).json({ error: fetchError.message });
                }
                const user_data = userData ? userData[0] : {}; // Utilisez la première entrée du tableau des données

                // Enregistrer le cookie contenant le jeton d'accès
                // res.cookie('access_token', access_token, { httpOnly: true });
                res.cookie('access_token', access_token);

                return res.json({ access_token, id, user_data });
            }

            if (error) {
                return res.status(400).json({ error: error.message });
            }
        }

        // Logout
        SignOut = async (req: Request, res: Response) => {
            // Supprimer le cookie du jeton d'accès
            res.clearCookie('access_token');
            const logout = await this.supabase.supa().auth.signOut();
            console.log(logout.error)
            return res.json({ message: 'Déconnexion réussie' });
        }

        // Register
        SignUp = async (req: Request, res: Response) => {
            const { firstname, lastname, email, password } = req.body;
            const newRegister = new Register(firstname, lastname, email, password);
            const { error } = await this.supabase.supa().auth.signUp({
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
