import type { Response, Request } from "express";
import { users } from "../models/user";
import type { User } from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/utils";
import e from "express";
import * as dotenv from "dotenv-safe";
import jwt from "jsonwebtoken"

dotenv.config();
export const register = async (req: Request, res: Response) => {
const { email, password, username } = req.body;

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: "Usuario já existe" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser: User = {
        id: users.length + 1,
        email,
        password: hashedPassword,
        username
    }

    users.push(newUser);
    res.status(201).json({ message: "Usuário registrado com sucesso" });
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const JWT_SECRET = process.env.JWT_SECRET as string;
    const JWT_EXPIRES = process.env.JWT_EXPIRES as string;
    const user = users.find(u => u.email == email)
    if(!user){
        return res.status(400).json({ message: "Credenciais Invalidas"})
    }
    if(await comparePassword(password, user.password)){
        const userId = user.id
        const token = jwt.sign({ userId }, JWT_SECRET, {
            expiresIn: parseInt(JWT_EXPIRES!)
        })
        return res.status(200).json({token})
    }
    res.status(400).json({ message: "Credenciais Invalidas" });

}