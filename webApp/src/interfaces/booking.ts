export interface booking {
    id: number
    events: {
        name: string;
        start: string;
        city: string;
        address: string;
        postal_code: string;
    }
    trains: {
        idenfier: string;
        lobby: string;
        departure_at: string;
        arrive_at: string;
    }
}