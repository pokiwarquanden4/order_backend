import express from "express";
import passport from 'passport'
import { UserModel } from "../../models/userModels";
import { RoleModel } from "../../models/roleModels";
import { createJWT, createRefreshToken } from "../../jwtService/jwtService";
require('dotenv').config()

const loginRoutes = express.Router();

loginRoutes.get("/login/success", async (req: any, res) => {
    if (req.user) {
        const profile = req.user

        const user = await UserModel.findOne({
            account: profile.id,
        })

        const role = await RoleModel.findOne({
            user: user.id
        })

        const response = {
            accessToken: createJWT({
                account: user.account,
                roleName: role.roleName
            }),
            refreshToken: createRefreshToken({
                account: user.account,
                roleName: role.roleName
            }),
            user: user
        }

        res.status(200).json({
            success: true,
            message: "successfull",
            data: response
        });
    }
});

loginRoutes.get("/logout", (req: any, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

loginRoutes.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
});

loginRoutes.get("/google", passport.authenticate("google", { scope: ["profile", 'email'] }));

loginRoutes.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

export default loginRoutes