class Booking {
    name?: string;
    city?: string;
    country?: string;
    postal_code?: number;
    date_start?: Date;
    category?: string;
    prices?: number;

    constructor(name?: string,
        city?: string, country?: string,
        postal_code?: number, date_start?: Date,
        category?: string,
        prices?: number) {
        this.name = name
        this.city = city
        this.postal_code = postal_code
        this.country = country
        this.date_start = date_start
        this.category = category
        this.prices = prices
    }
}

export default new Booking;