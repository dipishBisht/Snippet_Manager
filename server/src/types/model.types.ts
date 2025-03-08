import { Document, Types } from "mongoose";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilePicture: string
    preferences: {
        theme: string
        editorSettings: Record<string, any>;
        defaultlanguage: string;
    }
}

export interface ICollection extends Document {
    name: string;
    description?: string;
    owner: Types.ObjectId;
    isPublic: boolean;
}

export interface ISnippet extends Document {
    title: string;
    content: string;
    language: string;
    description?: string;
    tags?: string[];
    owner: Types.ObjectId;
    collectionId: Types.ObjectId;
    isPublic: boolean;
    stars?: number;
    viewCount?: number;
}
