import mongoose from "mongoose";
import zod from "zod";

export const createCollectionBody = zod.object({
    name: zod.string().min(1).trim(),
    description: zod.string().trim(),
    owner: zod.string().min(1).trim().transform((val) => new mongoose.Types.ObjectId(val)), 
    isPublic: zod.boolean()
})