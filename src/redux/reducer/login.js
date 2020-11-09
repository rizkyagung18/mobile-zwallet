import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, IS_ADMIN, IS_USER } from '../type/login'

const initialState = {
    token: '',
    isLogin: false,
    loading: false,
    error: '',
    isEmailActive: false,
    isPasswordActive: false,
    isEyeClick: false,
    isAdmin: false,
    isUser: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                loading: false,
                isLogin: true,
                error: ''
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload.data.message,
                loading: false,
                isLogin: false,
                isAdmin: false,
                isUser: false
            }
        case IS_ADMIN:
            return {
                ...state,
                isUser: false,
                isAdmin: true,
            }
        case IS_USER:
            return {
                ...state,
                isAdmin: false,
                isUser: true
            }
        case LOGOUT:
            return {
                ...state,
                token: '',
                isLogin: false,
                _persist: {
                    rehydrated: true,
                    version: -1
                },
                isAdmin: false
            }
        default:
            return state
    }
}

