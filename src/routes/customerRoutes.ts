import express from "express";
import { jwtMiddlewareController } from "../middleWare/jwtMiddleware";
import { handleResponseWithJWTMiddleware } from "../jwtService/jwtService";
import { getCustomerInfo } from "../controllers/customers/customersController";

const customerRoutes = express.Router();

customerRoutes.get("/customers/info", jwtMiddlewareController, getCustomerInfo, handleResponseWithJWTMiddleware);


export default customerRoutes;
