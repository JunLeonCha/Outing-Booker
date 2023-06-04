export class User {

    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    phone?: number;

    constructor() {
    }

    static newUser(email: string, password: string, firstname?: string, lastname?: string, phone?: number): User {
        const user: User = new User();
        user.email = email;
        user.password = password;
        user.firstname = firstname;
        user.lastname = lastname
        user.phone = phone;

        return user;
    }

    static getUser(email: string | "", password: string): User {
        const user: User = new User();
        user.email = email;
        user.password = password;

        return user;
    }
}