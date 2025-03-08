import jwt from "jsonwebtoken";

export interface AuthUser {
    _id: string;
    email: string;
    username: string;
}

declare module "express-serve-static-core" {
    interface Request {
        user?: AuthUser
    }
}

export interface DecodedToken extends jwt.JwtPayload {
    _id: string
    username: string;
    email: string;
}
