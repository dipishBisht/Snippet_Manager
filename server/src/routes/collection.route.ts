import { Router } from "express";
import { createCollection, getAllCollection, getCollectionById, getUserCollections } from "../controller/collection.controller";
import { protectedRoute } from "../middleware/auth.middleware";

const router = Router();

// Get my collection
router.get("/my-collections", protectedRoute, getUserCollections);


// Get collection by id
router.get("/:id", getCollectionById);


// Get all collections
router.get("/", getAllCollection);


// create collection
router.post("/", createCollection);


// TODO Update collection


// TODO Delete collection

export default router;