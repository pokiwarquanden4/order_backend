type RouteConfig = {
    role: string[] | undefined;
    [key: string]: RouteConfig | boolean | string[] | undefined;
};

type RoutesConfig = {
    [key: string]: RouteConfig;
};

const routesConfig: RoutesConfig = {
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

export const checkConfigJWT = (urlString: string) => {
    const urlParts = urlString.split("/");
    let config: RouteConfig;

    for (let i = 1; i < urlParts.length; i++) {
        const part =
            urlParts[i].indexOf("?") === -1
                ? urlParts[i]
                : urlParts[i].slice(0, urlParts[i].indexOf("?"));
        if (config[part]) {
            config = routesConfig[part];
        } else {
            return null;
        }
    }

    return { role: config.role };
};
