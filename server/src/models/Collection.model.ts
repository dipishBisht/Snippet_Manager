import mongoose, { Schema, Types } from "mongoose";
import { ICollection } from "../types";

const collectionSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    owner: {
        type: Types.ObjectId,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    }

}, { timestamps: true });

export default mongoose.model<ICollection>("Collection", collectionSchema);
