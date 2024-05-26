export interface errorResponse {
    status: number
    message: string
}

export interface jwtUserData {
    account: string,
    roleName: string
}

export interface requestData {
    body: requestDataBody;
    [key: string]: any;
}

export interface requestDataBody {
    role: string[] | undefined;
    jwtAccount: jwtUserData;
    refreshToken: boolean;
    [key: string]: any;
}

export interface authenResults {
    error?: errorResponse,
    refreshToken: boolean,
    userData?: jwtUserData
}

export const roleList = ['Customer', 'Chef', 'Waiter', 'Counter', 'Owner']