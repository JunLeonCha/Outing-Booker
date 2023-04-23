export class User {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone?: number;
    created_at?: Date;

    constructor(firstname: string, lastname: string, email: string, password: string, phone?: number, created_at?: Date,) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
    }
}