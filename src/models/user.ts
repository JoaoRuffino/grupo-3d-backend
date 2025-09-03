export interface User {
    id: number;
    email: string;
    password: string;
    username: string;
}

export const users: User[] = []; // por enquanto em memória
