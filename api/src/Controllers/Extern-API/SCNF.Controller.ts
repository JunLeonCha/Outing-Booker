import { Request, Response } from "express";

interface idAdmin {
    id: string;
    name: string;
    quality: number;
}

class SNCF {
    constructor() {
        //
    }

    private localAndEventCity: idAdmin[] = []
    headers = {
        Authorization: 'Basic ' + btoa("927b3c6a-6f9b-45a1-bb6e-ad69d8a4ebd3" + ':' + "")
    };

    getDepartureArrived = async (req: Request, res: Response) => {
        let local_city = req.query.local_city
        let event_city = req.query.event_city
        let departure_date = req.query.departure_date


        this.getLocalCityToEventCity(local_city, event_city, this.headers, this.localAndEventCity).then(() => {

            let url = `https://api.sncf.com/v1/coverage/sncf/journeys/?from=${this.localAndEventCity[0].id}&to=${this.localAndEventCity[1].id}&datetime=${departure_date}`;

            fetch(url, { headers: this.headers })
                .then((response) => response.json())
                .then((data) => {
                    return res.send(data);
                    // Faites quelque chose avec les données récupérées
                })
                .catch((error) => {
                    return res.send(error);
                    // return error
                });
        })
    }

    //Get administration region by Id
    getLocalCityToEventCity = async (local_city: any, event_city: any, headersParams: any, arrayResponse: idAdmin[]) => {
        const fetchSNCFPlaces = async (query: any) => {
            const response = await fetch(`https://api.sncf.com/v1/coverage/sncf/places/?q=${query}`, {
                headers: headersParams,
            });

            if (response.ok) {
                const data = await response.json();
                const { places } = data;

                // Extract id and name from places and create idAdmin objects
                const idAdminObjects = places.map((place: any) => {
                    return {
                        id: place.administrative_region.id,
                        name: place.administrative_region.name
                    };
                });

                return idAdminObjects;
            }

            return null;
        };

        const id_local_city = await fetchSNCFPlaces(local_city);
        const id_event_city = await fetchSNCFPlaces(event_city);

        arrayResponse.push(...id_local_city, ...id_event_city);
    }
}

export default SNCF;