import mongoose, { Schema, Types } from "mongoose";
import { IUser } from "../types";
import { UserModel } from "../lib/constants";


const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowecase: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: ''
    },
    preferences: {
        theme: {
            type: String,
            default: 'light',
        },
        editorSettings: {
            type: Object,
            default: {}
        },
        defaultlanguage: {
            type: String,
            default: 'javascript'
        }
    },
    collections: {
        type: [Types.ObjectId],
        default: []
    }
}, { timestamps: true });

const UserEntity = mongoose.model<IUser>(UserModel, userSchema);

export default UserEntity;
