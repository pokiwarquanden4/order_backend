import mongoose, { Schema } from "mongoose";

const PenaltyAndRewardSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        reason: {
            type: String,
        },
        value: {
            type: Number,
            default: 0
        },
        status: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);


export const PenaltyAndRewardModel = mongoose.model("PenaltyAndReward", PenaltyAndRewardSchema);