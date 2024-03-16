import mongoose, { Schema } from "mongoose";

const roleSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        roleName: {
            type: String,
            require: true
        },
        salary: {
            type: Number,
            default: 0
        },
        workTimeStart: {
            type: Date,
        },
        workTimeEnd: {
            type: Date,
        }
    },
    { timestamps: true }
);


export const RoleModel = mongoose.model("Role", roleSchema);