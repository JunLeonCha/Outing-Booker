export type EventResult = {
    name: string;
    type: string;
    id: string;
    description: string;
    url: string;
    images: {
        url: string;
    }[];
    sales: {
        public: {
            startDateTime: string;
            startTBD: boolean;
            startTBA: boolean;
            endDateTime: string;
        }
    }
    dates: {
        start: {
            localDate: string;
            localTime: string;
            dateTime: string;
            dateTBD: boolean,
            dateTBA: boolean,
            timeTBA: boolean,
            noSpecificTime: boolean
        }
        timezone: string;
        status: {
            code: string;
        }
    };
    classifications: {
        primary: boolean;
        segment: {
            id: string;
            name: string
        }
        genre: {
            id: string;
            name: string
        }
        subGenre: {
            id: string;
            name: string;
        }
        family: boolean
    }[];
    priceRanges: {
        type: string;
        currency: string;
        min: number;
        max: number;
    }
    _embedded: {
        venues: [{
            name: string;
            type: string;
            id: string;
            additionalInfo: string;
            img: [{
                url: string;
            }]
            postalCode: string;
            city: { name: string }
            country: {
                name: string;
                countryCode: string;
            }
            address: {
                line1: string;
            }
            location: {
                longitude: string;
                latitude: string;
            }
        }]
    }
}