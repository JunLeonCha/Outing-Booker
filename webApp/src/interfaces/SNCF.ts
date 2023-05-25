export type sncfInterface = {
    error: {
        message: string;
    }
    journeys: {
        arrival_date_time: string;
        departure_date_time: string;
        duration: number;
        sections: {
            id: string;
            from: {
                name: string;
            };
            to: {
                name: string;
            };
            terminus: {
                name: string;
            };
            display_informations: {
                headsign: string;
                commercial_mode: string;
                label: string;

            }
        }[];
    }[];
};
