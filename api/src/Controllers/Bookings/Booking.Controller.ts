import { Request, Response } from "express"
import Supabase from "../../db"


class BookingController {
    private supabase = Supabase

    make_reservation = async (req: Request, res: Response) => {

        const { id_user, event_name, event_city,
            event_address, event_postal_code, event_start,
            identifier, departure_travel, arrived_travel } = req.body

        const bookingData = {
            user_id: id_user,
            event_name: event_name,
            event_city: event_city,
            event_address: event_address,
            event_postal_code: event_postal_code,
            event_start: event_start,
            identifier_journey: identifier,
            departure_journey: departure_travel,
            arrived_journey: arrived_travel
        }
        const { data, error } = await this.supabase.supa().rpc('insert_booking', bookingData)

        if (data) {
            return res.status(200).send("success")
        } else if (error) {
            return res.status(500).send({ error: error.message, hint: error.hint })
        }
    }

    get_users_list_reservations = async (req: Request, res: Response) => {
        const user = req.body.id_user;

        const { data, error } = await this.supabase.supa().from("bookings")
            .select('id, events(name, start,address,city,postal_code), trains(identifier, lobby, departure_at, arrived_at)')
            .eq('id_user', req.body.id_user)

        return res.status(200).json(data)

    }
}

export default BookingController;   