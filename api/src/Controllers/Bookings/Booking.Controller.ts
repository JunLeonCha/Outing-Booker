import { Request, Response } from "express"
import supabase from "../../db.js"


export const make_reserveration = async (req: Request, res: Response) => {
    const event = { name: req.body.event_name, city: req.body.event_city, address: req.body.event_address, postal_code: req.body.postal_code }
    const travel = [req.body.travelDeparture, req.body.travelArrived]
    let lastInsertEventId: string;
    let lastInsertTrainId: string;

    const { data: eventInsertData, error: eventInsertError } = await supabase
        .from("events")
        .insert(event)
        .select();

    if (eventInsertData) {
        lastInsertEventId = eventInsertData[0].id;

        // Insérer les données dans la table "trains"
        const trainData = { departure_at: req.body.travelDeparture, arrived_at: req.body.travelArrived };
        const { data: trainInsertData, error: trainInsertError } = await supabase
            .from("trains")
            .insert(trainData)
            .select();

        if (trainInsertData) {
            lastInsertTrainId = trainInsertData[0].id;

            // Insérer les données dans la table "bookings"
            const { data: bookingData, error: bookingError } = await supabase
                .from("bookings")
                .insert({ id_event: lastInsertEventId, id_train: lastInsertTrainId, id_user: req.body.id_user })
                .select();

            if (bookingData) {
                console.log(bookingData);
                return res.status(200).send("Votre réservation a été ajoutée.");
            } else {
                console.log(bookingError);
                return res.status(400).send(`Une erreur est survenue lors la reservation.\n ${bookingError}`);
            }
        } else {
            console.log(trainInsertError);
            return res.status(400).send(`Une erreur est survenue lors de la reservation.\n ${trainInsertError}`);
        }
    } else {
        console.log(eventInsertError);
        return res.status(400).send(`Une erreur est survenue lors de la reservation.\n ${eventInsertError}`);
    }
}