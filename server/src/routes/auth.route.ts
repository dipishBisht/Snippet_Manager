import { Router } from "express"
import { getAllUsers, getUserById, loginInUser, signUpUser } from "../controller/auth.controller";

const router = Router();

// Get user by id
router.get("/:id", getUserById)

// Get all users
router.get("/", getAllUsers)

// Signup user
router.post("/signup", signUpUser);

// Login user
router.post("/login", loginInUser);


// TODO Update user


// TODO Delete user


export default router;
