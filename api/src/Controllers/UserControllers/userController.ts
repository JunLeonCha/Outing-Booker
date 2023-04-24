import { Request, Response } from "express"
import supabase from "../../db.js"
import { User } from "../../Models/UserModels/UserModel";

export const SignUp = async (req: Request, res: Response) => {
    const { firstname, lastname, email, password } = req.body;
    const user = new User(firstname, lastname, email, password)
    const { data, error } = await supabase.auth.signUp(
        {
            email: user.email,
            password: user.password,
            options: {
                data: {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    password: password,
                    phone: user.phone,
                    created_at: new Date().toISOString()
                }
            }
        }
    )
}