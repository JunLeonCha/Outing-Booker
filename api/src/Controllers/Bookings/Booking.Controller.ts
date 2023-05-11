import { Request, Response } from "express"
import supabase from "../../db.js"

export const newBooking = async (req: Request, res: Response) => {
    try {
        const {
            name,
            city, country,
            postal_code,
            date_start,
            category,
            prices
        } = req.body

        const { error } = await
            supabase
                .from("bookings")
                .insert({
                    name: name,
                    city: city,
                    country: country,
                    date_start: date_start,
                    postal_code: postal_code,
                    category: category,
                    prices: prices
                })

        return res.status(200).send("La réservation à été faite")
    } catch (err) {

    }
}