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
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const userModels_1 = require("../../models/userModels");
const roleModels_1 = require("../../models/roleModels");
const jwtService_1 = require("../../jwtService/jwtService");
require('dotenv').config();
const loginRoutes = express_1.default.Router();
loginRoutes.get("/login/success", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.user) {
        const profile = req.user;
        const user = yield userModels_1.UserModel.findOne({
            account: profile.id,
        });
        const role = yield roleModels_1.RoleModel.findOne({
            user: user.id
        });
        const response = {
            accessToken: (0, jwtService_1.createJWT)({
                account: user.account,
                roleName: role.roleName
            }),
            refreshToken: (0, jwtService_1.createRefreshToken)({
                account: user.account,
                roleName: role.roleName
            }),
            data: user
        };
        res.status(200).json(Object.assign({ success: true, message: "successfull" }, response));
    }
}));
loginRoutes.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});
loginRoutes.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});
loginRoutes.get("/google", passport_1.default.authenticate("google", { scope: ["profile", 'email'] }));
loginRoutes.get("/google/callback", passport_1.default.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
}));
exports.default = loginRoutes;
//# sourceMappingURL=login.js.map