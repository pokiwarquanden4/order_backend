import mongoose, { Schema } from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        tableNumber: {
            type: Number,
            required: true,
        },
        dishes: {
            type: Schema.Types.ObjectId,
            ref: 'History'
        },
        note: {
            type: String,
            default: ""
        },
        customerName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        status: {
            type: Number,
            default: 0
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        vouchers: [{
            type: Schema.Types.ObjectId,
            ref: 'Voucher'
        }],

    },
    { timestamps: true }
);


export const PaymentModel = mongoose.model("Payment", PaymentSchema);