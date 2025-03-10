import { Request, Response } from "express";
import UserEntity from "../models/User.model";
import { signInBody, signupBody } from "../lib/validation";
import { generateToken, hashPassword, validatePassword } from "../lib/utils";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";


export async function getLoginUser(req: Request, res: Response): Promise<any> {
    try {
        const { user } = req;
        if (!user)
            return res.status(400).json({ success: false, message: "No user found" })

        return res.status(200).json({ success: true, user })
    } catch (error) {
        console.log("GET LOGIN USER ERROR :", error);

        return res.status(500).json({ success: false, messsage: "Internal Server Error" });
    }
}

export async function getUserById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
        const isUserExist = await UserEntity.findById(id);

        if (!isUserExist) {
            return res.status(400).json({ success: false, message: "No user with this id exists." });
        }

        return res.status(200).json({ success: true, user: isUserExist });
    } catch (error) {
        console.error("GET USER BY ID ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getAllUsers(_: Request, res: Response): Promise<any> {
    try {
        const users = await UserEntity.find({});
        return res.status(200).json({ success: true, users });
    } catch (error) {
        console.error("GET ALL USERS ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function signUpUser(req: Request, res: Response): Promise<any> {
    try {
        const { username, email, password } = req.body;
        const { success } = signupBody.safeParse({ username, email, password });

        if (!success) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials !",
            });
        }

        const isUserExistWithEmail = await UserEntity.findOne({ email });

        if (isUserExistWithEmail) {
            return res.status(400).json({ success: false, message: "User with this email already exist" });
        }

        const isUserExistWithUsername = await UserEntity.findOne({ username });

        if (isUserExistWithUsername) {
            return res.status(400).json({ success: false, message: "User with this username already exist" });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new UserEntity({
            username: username.toLowerCase(),
            email: email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json({ success: true, message: "Sign up successfully" })

    } catch (error) {
        console.error("SIGNUP ERROR: ", error)
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function loginInUser(req: Request, res: Response): Promise<any> {
    try {
        const { email, password } = req.body;

        const { success } = signInBody.safeParse({ email, password })

        if (!success) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials !",
            });
        }

        const isUserExist = await UserEntity.findOne({ email });

        if (!isUserExist) {
            return res.status(400).json({ success: false, message: "Invalid credentials !" })
        }

        const isPasswordcorrect = validatePassword(password, isUserExist.password);

        if (!isPasswordcorrect) {
            return res.status(400).json({ success: false, message: "Invalid credentials ! 2" });
        }

        const payload = {
            _id: isUserExist._id,
            username: isUserExist.username,
            email: isUserExist.email,
        }

        const token = generateToken(payload, res);

        return res.status(200).json({ success: true, token, message: "Logged in successfully" });
    } catch (error) {
        console.error("LOGIN ERROR :", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function googleAuthtication(req: Request, res: Response): Promise<any> {

    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

    try {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload) {
            return res.status(400).json({ success: false, message: "Invalid token payload" });
        }

        const { email, name, sub } = payload;

        let user = await UserEntity.findOne({ email });
        console.log(sub);

        if (user) {
            // Login User
            console.log("Login user");

            // user = await UserEntity.create({ googleId: sub, email, name });
        } else {
            // Create User
            console.log("Create user");

        }

        // const authToken = generateToken()

        // res.json({ success: true, token: authToken });
    } catch (error) {
        console.error("Google Auth Error:", error);
        res.status(500).json({ success: false, message: "Authentication failed" });
    }
}
