import { Router } from "express"
import { getAllUsers, getLoginUser, getUserById, googleAuthtication, loginInUser, signUpUser } from "../controller/auth.controller";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

// Get login user
router.get("/me", protectedRoute, getLoginUser);

// Get user by id
router.get("/:id", getUserById)

// Get all users
router.get("/", getAllUsers)

// Signup user
router.post("/signup", signUpUser);

// Login user
router.post("/login", loginInUser);

// google authentication
router.post("/google", googleAuthtication);


// TODO Update user


// TODO Delete user


export default router;
