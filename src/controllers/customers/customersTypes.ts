import { requestDataBody } from "../../types";

export interface requestGetCustomerInfoById {
    body: requestDataBody & { id: string };
    [key: string]: any;
}