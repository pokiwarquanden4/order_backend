"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerRoutes_1 = __importDefault(require("./customerRoutes"));
const login_1 = __importDefault(require("./login/login"));
const routes = (app) => {
    app.use("/users", customerRoutes_1.default);
    app.use('/auth', login_1.default);
};
exports.default = routes;
//# sourceMappingURL=index.js.map