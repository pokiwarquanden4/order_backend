"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const supplierSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.SupplierModel = mongoose_1.default.model("Supplier", supplierSchema);
//# sourceMappingURL=SupplierModels.js.map