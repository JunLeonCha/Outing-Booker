import { Response, Request } from "express"


class TkMaster {

    constructor() { }

    getEventForHome = async (req: Request, res: Response) => {
        const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&size=5&sort=random&countryCode=FR")
            .then(res => res.json())
            .then(data => data._embedded.events)

        return res.status(200).json(result)
    }


    getAllEvent = async (req: Request, res: Response) => {
        const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&size=70&sort=relevance,desc&countryCode=FR")
            .then(res => res.json())
            .then(data => data._embedded.events)

        return res.status(200).json(result);
    }

    getEventById = async (req: Request, res: Response) => {
        const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${req.params.id}?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*`)
            .then(res => res.json())
            .then(data => data)
        return res.status(200).json(result);
    }

    getMusicEvent = async (req: Request, res: Response) => {
        const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&countryCode=FR&classificationName=music")
            .then(res => res.json())
            .then(data => data._embedded.events)
        return res.status(200).json(result)
    }

    getSportEvent = async (req: Request, res: Response) => {
        const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&countryCode=FR&classificationName=sport")
            .then(res => res.json())
            .then(data => data._embedded.events)
        return res.status(200).json(result)
    }

    getArtEvent = async (req: Request, res: Response) => {
        const result = await fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=amgb44GRYhk0uZO7vShHRhsLeWGMNHkp&locale=*&countryCode=FR&classificationName=cultural")
            .then(res => res.json())
            .then(data => data._embedded.events)

        return res.status(200).json(result)
    }
}

export default TkMaster