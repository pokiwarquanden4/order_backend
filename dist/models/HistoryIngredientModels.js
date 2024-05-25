"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const historySchema = new mongoose_1.default.Schema({
    ingredient: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Ingredient'
    },
    supplier: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.HistoryModel = mongoose_1.default.model("History", historySchema);
//# sourceMappingURL=HistoryIngredientModels.js.map