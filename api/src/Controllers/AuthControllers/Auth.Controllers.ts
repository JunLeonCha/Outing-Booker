import { Request, Response } from "express"
import supabase from "../../db.js"
import { Connexion, Register } from "../../Models/Authentication/Authentication";

export const SignIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const Login = new Connexion(email, password)
        const { data, error } = await supabase.auth.signInWithPassword({
            email: Login.email,
            password: Login.password,
        }
        );
        if (data?.session?.user) {
            const { access_token, user: { id, user_metadata } } = data.session;
            const { email, firstname, lastname } = user_metadata ?? {};
            res.json({ id, access_token, email, firstname, lastname });
        }
    } catch (error) {
        res.send(error)
    }
}

export const SignOut = async (req: Request, res: Response) => {
    const logout = await supabase.auth.signOut();
}

export const SignUp = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password } = req.body;
    const newRegister = new Register(firstname, lastname, email, password)
    const { data, error } = await supabase.auth.signUp(
        {
            email: newRegister.email,
            password: newRegister.password,
            options: {
                data: {
                    firstname: newRegister.firstname,
                    lastname: newRegister.lastname,
                    email: newRegister.email,
                    password: password,
                    phone: newRegister.phone,
                    created_at: new Date().toISOString()
                }
            }
        }
    )
}