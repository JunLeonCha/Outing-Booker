import express from "express"
import { Request, Response } from "express"
import supabase from "../../db.js"
import { User } from "../../Models/UserModels/UserModel";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
    const { firstname, lastname, email, password, phone, created_at } = req.body;
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
    console.log(data)
})

export default router;