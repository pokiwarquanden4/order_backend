import mongoose, { Schema } from "mongoose";

const historySchema = new mongoose.Schema(
    {
        ingredient: {
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        },
        supplier: {
            type: Schema.Types.ObjectId,
            ref: 'Supplier'
        },
        status: {
            type: Number,
            default: 0
        },
        value: {
            type: Number,
            default: 0
        },
        reciveDate: {
            type: Date,
            require: true
        },
        pricePerValue: {
            type: Number,
            require: true
        }
    },
    { timestamps: true }
);


export const HistoryModel = mongoose.model("History", historySchema);