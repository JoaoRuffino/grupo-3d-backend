export interface User {
    id: number;
    email: string;
    password: string;
}

export const users: User[] = []; // por enquanto em memória
