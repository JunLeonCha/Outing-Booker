import { Request, Response } from "express";
import Supabase from "../../db";
import { Connexion, Register } from "../../Models/Authentication/Authentication";
import jwt from "jsonwebtoken"

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
                const user_data = userData ? userData[0] : {};
                const user = { userData }
                var userToken = jwt.sign(user, "0ut1ngB00k3r", { algorithm: "HS256" })
                res.cookie('access_token',  userToken );
                return res.status(200).json(user)
            }
            if (error) {
                return res.status(400).json({ error: error.message });
            }
        }

        // Logout
        SignOut = async (req: Request, res: Response) => {
            // Supprimer le cookie du jeton d'accès
            await this.supabase.supa().auth.signOut().then(() => {
                res.clearCookie('access_token');
                return res.json({ message: 'Déconnexion réussie' });
            });
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
