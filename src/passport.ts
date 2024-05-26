const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
import passport from 'passport'
import { UserModel } from './models/userModels';
import { RoleModel } from './models/roleModels';
import { roleList } from './types';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            const existingUser = await UserModel.findOne({ account: profile.id });

            if (!existingUser) {
                const user = await UserModel.create({
                    account: profile.id,
                    avatar: profile.picture,
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleLogin: true,
                    password: '',
                })

                RoleModel.create({
                    user: user.id,
                    roleName: roleList[0]
                })
            }

            done(null, profile);
        }
    )
);


passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});