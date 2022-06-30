import * as crypto from "crypto";
import * as  mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    email: string;
    name: string;
};

export interface AuthToken {
    accessToken: string;
    kind: string;
}

const userSchema = new mongoose.Schema<UserDocument>(
    {
        email: { type: String, unique: true },
        name: String
    },
    { timestamps: true },
);
export const User = mongoose.model<UserDocument>("User", userSchema);
