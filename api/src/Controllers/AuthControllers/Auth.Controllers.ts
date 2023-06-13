import { Request, Response } from "express";
import Supabase from "../../db";
import jwt from "jsonwebtoken"
import { User } from "../../Models/UserModels/UserModel";


export default class AuthenticationController {
    private supabase = Supabase;

    SignIn = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const Login = User.getUser(email, password);
        const { data, error } = await this.supabase.supa().auth.signInWithPassword({
            email: Login.email ?? "",
            password: Login.password ?? "",
        });

        if (data?.session?.user) {
            console.log(data)
            const { user: { id } } = data.session;

            // Récupérer toutes les données de la table "user" pour l'utilisateur connecté
            const { data: userData, error: fetchError } = await this.supabase.supa()
                .from('users')
                .select("id, firstname, lastname, city, postal_code")
                .eq('id', id);

            if (fetchError) {
                return res.status(400).json({ error: fetchError.message });
            }
            const user = { userData }
            return res.status(200).json(user)
        }
        if (error) {
            return res.status(400).json({ error: error.message });
        }
    }

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
        const newRegister = User.newUser(email, password, firstname, lastname);
        const { error } = await this.supabase.supa().auth.signUp({
            email: newRegister.email ?? "",
            password: newRegister.password ?? "",
            options: {
                data: {
                    firstname: newRegister.firstname,
                    lastname: newRegister.lastname,
                    email: newRegister.email,
                    password: newRegister.password,
                    phone: newRegister.phone,
                },
            },
        });

        if (error) {
            return res.status(500).send({ error: error.message });
        }

        return res.json({ message: 'Inscription réussie' });
    }
}