import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        type: {
            type: Boolean,
            require: true
        },
        number: {
            type: Number,
            default: 0
        },
    },
    { timestamps: true }
);


export const IngredientModel = mongoose.model("Ingredient", ingredientSchema);