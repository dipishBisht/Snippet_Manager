import mongoose, { Schema, Types } from "mongoose";
import { ISnippet } from "../types";

const snippetSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    tags: {
        type: [String],
        default: []
    },
    owner: {
        type: Types.ObjectId,
        required: true
    },
    collectionId: {
        type: Types.ObjectId,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    stars: {
        type: Number,
        default: 0
    },
    viewCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

export default mongoose.model<ISnippet>("Snippet", snippetSchema);
