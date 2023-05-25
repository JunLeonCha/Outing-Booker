export type sncfInterface = {
    journeys: {
        arrival_date_time: string;
        departure_date_time: string;
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
        }[];
    }[];
};
