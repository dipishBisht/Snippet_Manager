import mongoose, { Schema } from "mongoose";
import { ISnippet } from "../types";
import { SnippetModel } from "../lib/constants";

const snippetSchema: Schema = new Schema<ISnippet>({
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
        type: Schema.Types.ObjectId,
        required: true
    },
    collectionId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    isStarred: {
        type: Boolean,
        default: false
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

const SnippetEntity = mongoose.model<ISnippet>(SnippetModel, snippetSchema);

export default SnippetEntity;
