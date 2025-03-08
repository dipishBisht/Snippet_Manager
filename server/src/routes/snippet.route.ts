import { Router } from "express";
import { createSnippet, getAllSnippet, getSnippetById } from "../controller/snippet.controller";

const router = Router();


// Get snippet by id
router.get("/:id", getSnippetById)


// Get all snippets 
router.get("/", getAllSnippet)


// Create snippet
router.post("/", createSnippet)


// TODO Update snippet


// TODO Delete snippet


export default router;
