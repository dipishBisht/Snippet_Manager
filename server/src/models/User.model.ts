import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";


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
    }
}, {
    timestamps: true
});

export default mongoose.model<IUser>('User', userSchema);
