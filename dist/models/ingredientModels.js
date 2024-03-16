"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngredientModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ingredientSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.IngredientModel = mongoose_1.default.model("Ingredient", ingredientSchema);
//# sourceMappingURL=ingredientModels.js.map