import { Request, Response } from "express"
import supabase from "../../db.js"

export const newBooking = async (req: Request, res: Response) => {

    await supabase.auth.getUser(req.params.access_token).then()
    
    try {
        const {
            id_user,
            id_event
        } = req.body

        const insert = await
            supabase
                .from("bookings")
                .insert({
                    id_user: id_user,
                    id_event: id_event,
                }).select("*")

        console.log(insert);

        return res.status(201).send("La réservation à été faite")
    } catch (err) {
        return res.status(500).send("Une Erreur est survenue")
    }
}