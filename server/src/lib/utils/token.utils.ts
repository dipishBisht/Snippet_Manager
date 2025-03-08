import jwt from "jsonwebtoken";
import { Response } from "express";

export function generateToken(payload: any, res: Response) {
    const { JWT_SECRET, NODE_ENV } = process.env;
    if (!JWT_SECRET)
        return res
            .status(500)
            .json({ success: false, message: "Jwt secret not found" });

    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d'
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: NODE_ENV !== "development",
    });

    return token;
}