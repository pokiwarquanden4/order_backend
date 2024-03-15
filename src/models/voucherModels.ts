import mongoose, { Schema } from "mongoose";

const voucherSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        menu: [{
            type: Schema.Types.ObjectId,
            ref: 'Menu'
        }],
        maxDiscount: {
            type: Number,
        },
        minimumForDiscount: {
            type: Number
        },
        discount: {
            type: Number,
            require: true
        },
        endDate: {
            type: Date,
            require: true
        }
    },
    { timestamps: true }
);


export const VoucherModel = mongoose.model("Voucher", voucherSchema);