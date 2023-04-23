import { Response, Request } from "express"

export const getAllEvent = async (req: Request, res: Response) => {
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&countryCode=FR")
}

