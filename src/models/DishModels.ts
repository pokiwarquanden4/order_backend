import mongoose, { Schema } from "mongoose";

const dishSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        menu: {
            type: Schema.Types.ObjectId,
            ref: 'Menu'
        },
        ingredient: [{
            type: Schema.Types.ObjectId,
            ref: 'Ingredient'
        }],
        ingredientConsumer: {
            type: Object,
            require: true
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            require: true
        },
    },
    { timestamps: true }
);


export const DishModel = mongoose.model("Dish", dishSchema);