"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtMiddlewareController = void 0;
const routesConfig_js_1 = require("../config/routesConfig.js");
const jwtService_js_1 = require("../jwtService/jwtService.js");
const jwtMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const config = (0, routesConfig_js_1.checkConfigJWT)(req.originalUrl);
        if (config.jwt) {
            req.body.role = config.role;
            const user = (0, jwtService_js_1.authenJWT)(req, res);
            if (user && !user.error) {
                if (!user.refreshToken) {
                    req.body = Object.assign(Object.assign({}, req.body), { jwtAccount: user });
                }
                else {
                    req.body = Object.assign(Object.assign({}, req.body), { jwtAccount: user, refreshToken: user.refreshToken });
                }
            }
            if (user.error) {
                return res.status(user.error.status).json(user.error.message);
            }
        }
        return next();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
const jwtMiddlewareController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return yield jwtMiddleware(req, res, next);
});
exports.jwtMiddlewareController = jwtMiddlewareController;
//# sourceMappingURL=jwtMiddleware.js.map