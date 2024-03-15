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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponseWithJWTMiddleware = exports.responseWithJWT = exports.authenJWT = exports.createRefreshToken = exports.createJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWT = (data) => {
    const user = {
        account: data.account,
        roleName: data.roleName,
    };
    const accessToken = jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
    return accessToken;
};
exports.createJWT = createJWT;
const createRefreshToken = (data) => {
    const user = {
        account: data.account,
        roleName: data.roleName,
    };
    const refreshToken = jsonwebtoken_1.default.sign(user, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "4h",
    });
    return refreshToken;
};
exports.createRefreshToken = createRefreshToken;
const authenJWT = (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let currentUser = {};
    if (token == null) {
        currentUser.error = {
            status: 401,
            message: "Token is null"
        };
    }
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) {
                    currentUser.error = {
                        status: 401,
                        message: "Token is invalid"
                    };
                }
                else {
                    if (req.body.role === undefined || user.roleName === req.body.role) {
                        currentUser.userData = user;
                        currentUser.refreshToken = true;
                    }
                    else {
                        currentUser.error = {
                            status: 401,
                            message: "You don't have permission"
                        };
                    }
                }
            });
        }
        else {
            if (req.body.role === undefined || user.roleName === req.body.role) {
                currentUser.userData = user;
            }
            else {
                currentUser.error = {
                    status: 401,
                    message: "You don't have permission"
                };
            }
        }
    });
    return currentUser;
};
exports.authenJWT = authenJWT;
const responseWithJWT = (req, res, obj) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.originalUrl === '/users/login' && res.locals.status === 200) {
        return Object.assign({ accessToken: (0, exports.createJWT)(res.locals.data), refreshToken: (0, exports.createRefreshToken)(res.locals.data) }, obj);
    }
    const user = req.body.jwtAccount;
    return req.body.refreshToken && user
        ? Object.assign({ accessToken: (0, exports.createJWT)(user), refreshToken: (0, exports.createRefreshToken)(user) }, obj) : Object.assign({}, obj);
});
exports.responseWithJWT = responseWithJWT;
const handleResponseWithJWTMiddleware = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseVal = yield (0, exports.responseWithJWT)(req, res, res.locals.data);
        return res.status(res.locals.status).json(responseVal);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.handleResponseWithJWTMiddleware = handleResponseWithJWTMiddleware;
//# sourceMappingURL=jwtService.js.map