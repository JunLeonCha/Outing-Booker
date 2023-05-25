export type SessionData = {
    access_token: string;
    expires_at: number;
    expires_in: number;
    refresh_token: string;
    token_type: string;
    user: {
        id: string;
        user_metadata: {
            created_at: string;
            email: string;
            firstname: string;
            lastname: string;
            phone: string;
        };
    };
}