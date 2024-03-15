import { requestGetCustomerInfoById } from "./customersTypes";

export const getCustomerInfo = async (req: requestGetCustomerInfoById, res, next) => {
    try {

        return next()
    } catch (err) {
        res.locals.status = 500
        res.locals.data = {
            message: "Sever Error"
        }
        return next()
    }
};