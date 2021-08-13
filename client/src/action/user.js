export const AUTHENTICATE_USER = 'authenticate_user';
export const USER_INFO = 'user_info';
export const CLEAR_USER_INFO = 'clear_user'

export const authenticateUser = (value) => {
    return {
        type: AUTHENTICATE_USER,
        value
    };
}

export const setUserInfo = (value) => {
    return {
        type: USER_INFO,
        value
    };
}

export const clearUserInfo = () => {
    return {
        type: CLEAR_USER_INFO
    }
}