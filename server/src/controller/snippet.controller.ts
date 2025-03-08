import { Request, Response } from "express";
import SnippetModel from "../models/Snippet.model";
import { createSnippetBody } from "../lib/validation/snippet.validation";


export async function getSnippetById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
        const isSnippetExist = await SnippetModel.findById(id);

        if (!isSnippetExist) {
            return res.status(400).json({ success: false, message: "No snippet with this id exists." });
        }

        return res.status(200).json({ success: true, snippet: isSnippetExist });
    } catch (error) {
        console.error("GET SNIPPET BY ID ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getAllSnippet(_: Request, res: Response): Promise<any> {
    try {
        const snippets = await SnippetModel.find({});
        return res.status(200).json({ success: true, snippets });
    } catch (error) {
        console.error("GET ALL SNIPPET ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function createSnippet(req: Request, res: Response): Promise<any> {
    try {
        const { title, content, language, description, tags, collectionId, isPublic, viewCount, stars } = req.body;
        const owner = req.user?._id;


        const { success } = createSnippetBody.safeParse({ title, content, language, description, tags, owner, collectionId, isPublic, stars, viewCount });

        if (!success)
            return res.status(400).json({ success: false, message: "Invalid credentials !" });

        const isSnippetExists = await SnippetModel.findOne({ title });

        if (isSnippetExists)
            return res.status(400).json({ success: false, message: "Snippet with this title already exists" });

        await SnippetModel.create({ title, content, language, description, tags, owner, collectionId, isPublic, stars, viewCount });

        return res.status(201).json({ success: true, message: "Snippet created successfully" });
    } catch (error) {
        console.error("CREATE SNIPPET ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}