import mongoose from "mongoose";
import zod from "zod";

export const createSnippetBody = zod.object({
    title: zod.string().min(1).trim(),
    content: zod.string().min(1).trim(),
    language: zod.string().min(1).trim(),
    description: zod.string().trim().optional(),
    tags: zod.array(zod.string()).optional(),
    collectionId: zod.string().min(1).trim().transform((val) => new mongoose.Types.ObjectId(val)),
    isPublic: zod.boolean(),
    isStarred: zod.boolean().default(false),
})
