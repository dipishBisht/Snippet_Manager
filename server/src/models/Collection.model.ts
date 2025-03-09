import mongoose, { Schema, Types } from "mongoose";
import { ICollection } from "../types";
import { CollectionModel } from "../lib/constants";

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
    },
    snippet: {
        type: [Types.ObjectId],
        default: []
    }

}, { timestamps: true });

const CollectionEntity = mongoose.model<ICollection>(CollectionModel, collectionSchema);

export default CollectionEntity;
