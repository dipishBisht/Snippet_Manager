import mongoose, { Schema, Types } from "mongoose";
import { ICollection } from "../types";
import { CollectionModel, SnippetModel } from "../lib/constants";
import UserEntity from "./User.model";

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
        required: true,
        ref: UserEntity
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    snippet: {
        type: [Types.ObjectId],
        default: [],
        ref: SnippetModel
    }

}, { timestamps: true });

const CollectionEntity = mongoose.model<ICollection>(CollectionModel, collectionSchema);

export default CollectionEntity;
