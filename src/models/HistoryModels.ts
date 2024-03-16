import mongoose, { Schema } from "mongoose";

const HistorySchema = new mongoose.Schema(
    {
        dishes: [{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
        dishesNumber: {
            type: Object,
            default: {}
        }
    },
    { timestamps: true }
);

export const HistoryModel = mongoose.model("History", HistorySchema);
