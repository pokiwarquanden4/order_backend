import express from "express";
import passport from 'passport'
require('dotenv').config()

const loginRoutes = express.Router();

loginRoutes.get("/login/success", (req: any, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            //   cookies: req.cookies
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

loginRoutes.get("/google", passport.authenticate("google", { scope: ["profile"] }));

loginRoutes.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);

export default loginRoutes