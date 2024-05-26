import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        account: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
            default: ""
        },
        phoneNumber: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        googleLogin: {
            type: Boolean,
            default: false
        },
        gender: {
            type: Boolean,
            default: false
        },
        vouchers: [{
            type: Schema.Types.ObjectId,
            ref: 'Voucher'
        }],
        histories: [{
            type: Schema.Types.ObjectId,
            ref: 'History'
        }],
        penaltyAndReward: [{
            type: Schema.Types.ObjectId,
            ref: 'PenaltyAndReward'
        }],
    },
    { timestamps: true }
);

export const UserModel = mongoose.model("User", userSchema);
