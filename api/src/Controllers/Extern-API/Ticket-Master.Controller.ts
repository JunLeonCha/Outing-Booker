import { Response, Request } from "express"

export const getAllEvent = async (req: Request, res: Response) => {
    const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&countryCode=FR")
        .then(res => res.json())
        .then(data => data._embedded.events)

    res.status(200).json(result);
}