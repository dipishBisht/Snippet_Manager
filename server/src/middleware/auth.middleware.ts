import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthUser, DecodedToken } from "../types/auth.types";
import UserModel from "../models/User.model";
import mongoose, { Types } from "mongoose";
import { IUser } from "../types";



export const protectedRoute = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const { JWT_SECRET } = process.env;

        if (!JWT_SECRET)
            return res
                .status(500)
                .json({ status: "error", message: "Jwt secret not found" });

        if (!token)
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized - No token provided" });

        const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;


        if (!decoded)
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized - Invalid token" });

        const user = await UserModel.findOne({ email: decoded.email }) as AuthUser;

        if (!user)
            return res
                .status(404)
                .json({ success: false, message: "User not found" });

        req.user = { _id: user._id.toString(), email: user.email, username: user.username };

        next();
    } catch (error) {
        console.log("ERROR IN PROTECTED ROUTE MIDDLEWARE:", error);
        return res
            .status(500)
            .json({ success: false, message: "Internal server error" });
    }
};
