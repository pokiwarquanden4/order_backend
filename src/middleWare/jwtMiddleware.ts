import { checkConfigJWT } from "../config/routesConfig.js";
import { authenJWT } from "../jwtService/jwtService.js";
import { requestData } from "../types/index.js";

const jwtMiddleware = async (req: requestData, res, next) => {
    try {
        const config = checkConfigJWT(req.originalUrl);
        if (config.role) {
            req.body.role = config.role;
            const authenResults = authenJWT(req);

            if (!authenResults.error) {
                req.body = {
                    ...req.body,
                    jwtAccount: authenResults.userData,
                    refreshToken: authenResults.refreshToken,
                };
            } else {
                return res.status(authenResults.error.status).json(authenResults.error.message);
            }
        }
        return next();
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
};

export const jwtMiddlewareController = async (req: requestData, res, next) => {
    return await jwtMiddleware(req, res, next);
};
