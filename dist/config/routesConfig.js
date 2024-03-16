"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkConfigJWT = void 0;
const routesConfig = {
// users: {
//     role: undefined,
//     login: {
//         jwt: false,
//         role: undefined
//     },
//     getUser: {
//         role: undefined,
//         details: {
//             jwt: true,
//             role: ["User"]
//         },
//     },
//     create: {
//         role: undefined,
//         account: {
//             jwt: false,
//             role: undefined,
//         },
//     }
// },
};
const checkConfigJWT = (urlString) => {
    const urlParts = urlString.split("/");
    let config;
    for (let i = 1; i < urlParts.length; i++) {
        const part = urlParts[i].indexOf("?") === -1
            ? urlParts[i]
            : urlParts[i].slice(0, urlParts[i].indexOf("?"));
        if (config[part]) {
            config = routesConfig[part];
        }
        else {
            return null;
        }
    }
    return { role: config.role };
};
exports.checkConfigJWT = checkConfigJWT;
//# sourceMappingURL=routesConfig.js.map