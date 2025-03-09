import { Document, Types } from "mongoose";
import { THEME_TYPE } from "../lib/constants/enum";

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    preferences: IPreferences;
    collections?: Types.ObjectId[]
}

export interface IPreferences {
    theme: THEME_TYPE;
    editorSettings: Record<string, any>;
    defaultlanguage: string;
}

export interface ICollection extends Document {
    name: string;
    description?: string;
    owner: Types.ObjectId;
    isPublic: boolean;
    snippet?: Types.ObjectId[]
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
