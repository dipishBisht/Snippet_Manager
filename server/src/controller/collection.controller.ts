import { Request, Response } from "express";
import CollectionModel from "../models/Collection.model";
import { createCollectionBody } from "../lib/validation/collection.validation";

export async function getCollectionById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
        const isCollectionExist = await CollectionModel.findById(id);

        if (!isCollectionExist) {
            return res.status(400).json({ success: false, message: "No collection with this id exists." });
        }

        return res.status(200).json({ success: true, collecetion: isCollectionExist });
    } catch (error) {
        console.error("GET COLLECTION BY ID ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getAllCollection(_: Request, res: Response): Promise<any> {
    try {
        const collecetions = await CollectionModel.find({});
        return res.status(200).json({ success: true, collecetions });
    } catch (error) {
        console.error("GET ALL COLLECTIONS ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function createCollection(req: Request, res: Response): Promise<any> {
    try {
        const { name, description, isPublic } = req.body;
        const owner = req.user?._id;


        const { success } = createCollectionBody.safeParse({ name, description, isPublic, owner });

        if (!success)
            return res.status(400).json({ success: false, message: "Invalid credentials !" });

        const isCollectionExists = await CollectionModel.findOne({ name });

        if (isCollectionExists)
            return res.status(400).json({ success: false, message: "Collection with this name already exists" });

        await CollectionModel.create({ name, description, isPublic, owner });

        return res.status(201).json({ success: true, message: "Collection created successfully" });
    } catch (error) {
        console.error("CREATE COLLECTION ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
