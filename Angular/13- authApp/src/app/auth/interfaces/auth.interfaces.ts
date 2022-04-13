export interface AuthResponse {
    ok: boolean;
    msg?: string;
    uid?: string;
    name?: string;
    token?: string;
    email?: string
}

export interface Usuario{
    uid: string;
    name: string;
    email: string;
}