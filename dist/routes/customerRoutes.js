"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwtMiddleware_1 = require("../middleWare/jwtMiddleware");
const jwtService_1 = require("../jwtService/jwtService");
const customersController_1 = require("../controllers/customers/customersController");
const customerRoutes = express_1.default.Router();
customerRoutes.get("/customers/info", jwtMiddleware_1.jwtMiddlewareController, customersController_1.getCustomerInfo, jwtService_1.handleResponseWithJWTMiddleware);
exports.default = customerRoutes;
//# sourceMappingURL=customerRoutes.js.map