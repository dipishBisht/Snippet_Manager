import { Router } from "express";
import { createCollection, getAllCollection, getCollectionById } from "../controller/collection.controller";

const router = Router();

// Get collection by id
router.get("/:id", getCollectionById);


// Get all collections
router.get("/", getAllCollection);


// create collection
router.post("/", createCollection);


// TODO Update collection


// TODO Delete collection

export default router;