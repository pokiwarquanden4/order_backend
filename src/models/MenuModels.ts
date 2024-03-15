import mongoose, { Schema } from "mongoose";

const menuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        dishes: [{
            type: Schema.Types.ObjectId,
            ref: 'Dish'
        }],
    },
    { timestamps: true }
);


export const MenuModel = mongoose.model("Menu", menuSchema);