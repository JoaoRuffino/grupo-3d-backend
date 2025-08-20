import type { Response, Request } from "express";
import { users } from "../models/user";
import type { User } from "../models/user.js";

export const register = (req: Request, res: Response) => {
const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email e senha sao obrigatorios" });
    }
    
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Usuario ja existe" });
    }

    const newUser: User = {
        id: users.length + 1,
        email,
        password
    }

    users.push(newUser);

    res.status(201).json({ message: "Usuário registrado com sucesso" });
}