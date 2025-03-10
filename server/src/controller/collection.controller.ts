import { Request, Response } from "express";
import CollectionEntity from "../models/Collection.model";
import { createCollectionBody } from "../lib/validation/collection.validation";
import UserEntity from "../models/User.model";
import { SnippetModel } from "../lib/constants";

export async function getCollectionById(req: Request, res: Response): Promise<any> {
    const { id } = req.params;

    try {
        const isCollectionExist = await CollectionEntity.findById(id);

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
        const collections = await CollectionEntity.find({}).populate({
            path: "snippet",
            model: SnippetModel
        })
        return res.status(200).json({ success: true, collections });
    } catch (error) {
        console.error("GET ALL COLLECTIONS ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function getUserCollections(req: Request, res: Response): Promise<any> {
    try {
        const userId = req.user?._id;

        const collections = await CollectionEntity.find({ owner: userId })
            .populate("snippet");

        return res.status(200).json({ success: true, collections });
    } catch (error) {
        console.error("GET USER COLLECTIONS ERROR:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function createCollection(req: Request, res: Response): Promise<any> {
    try {
        const { name, description, isPublic } = req.body;
        const owner = req.user?._id;


        const { success } = createCollectionBody.safeParse({ name, description, isPublic });

        if (!success)
            return res.status(400).json({ success: false, message: "Invalid credentials !" });

        const isCollectionExists = await CollectionEntity.findOne({ name });

        if (isCollectionExists)
            return res.status(400).json({ success: false, message: "Collection with this name already exists" });

        const user = await CollectionEntity.create({ name, description, isPublic, owner });

        await UserEntity.findByIdAndUpdate(owner, {
            $push: { collections: user._id }
        });

        return res.status(201).json({ success: true, message: "Collection created successfully" });
    } catch (error) {
        console.error("CREATE COLLECTION ERROR :", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
