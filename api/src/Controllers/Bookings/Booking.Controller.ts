import { Request, Response } from "express"
import Supabase from "../../db"


class BookingController {
    private supabase = Supabase

    // test = async (req: Request, res: Response) => {
    //     await this.supabase.supa().auth.getUser()
    //     // const resultat = await this.supabase.supa().from("booking").select("*")
    //     // return res.send(resultat.data)
    // }

    make_reserveration = async (req: Request, res: Response) => {

        const event = { name: req.body.event_name, city: req.body.event_city, address: req.body.event_address, postal_code: req.body.event_postal_code }
        const travel = [req.body.departure_travel, req.body.arrived_travel]
        let lastInsertEventId: string;
        let lastInsertTrainId: string;

        console.log(this.supabase.supa(req.body.access_token))

        const { data: eventInsertData, error: eventInsertError } = await this.supabase.supa()
            .from("events")
            .insert(event)
            .select();

        console.log(eventInsertError?.message)

        if (eventInsertData) {
            lastInsertEventId = eventInsertData[0].id;

            // Insérer les données dans la table "trains"
            const trainData = { identifier: req.body.identifier, api_id: req.body.id_journey, departure_at: req.body.departure_travel, arrived_at: req.body.arrived_travel };
            const { data: trainInsertData, error: trainInsertError } = await this.supabase.supa(req.body.access_token)
                .from("trains")
                .insert(trainData)
                .select();

            if (trainInsertData) {
                lastInsertTrainId = trainInsertData[0].id;

                // Insérer les données dans la table "bookings"
                const { data: bookingData, error: bookingError } = await this.supabase.supa(req.body.access_token)
                    .from("bookings")
                    .insert({ id_event: lastInsertEventId, id_train: lastInsertTrainId, id_user: req.body.id_user })
                    .select();

                if (bookingData) {
                    console.log("bookingData:\n" + bookingData);
                    return res.status(200).send("Votre réservation a été ajoutée.");
                } else {
                    console.log("bookingError\n" + bookingError.message);
                    return res.status(400).send(`Une erreur est survenue lors la reservation.\n ${bookingError}`);
                }
            } else {
                console.log("trainInsertError\n" + trainInsertError.message + "\n" + trainInsertError.code)
                return res.status(400).send(`Une erreur est survenue lors de la reservation.\n ${trainInsertError}`);
            }
        } else {
            console.log("eventInsertError\n" + eventInsertError.message);
            return res.status(400).send(`Une erreur est survenue lors de la reservation.\n ${eventInsertError}`);
        }
    }
}

export default new BookingController;