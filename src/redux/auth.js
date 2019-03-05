import * as ActionTypes from './ActionTypes';


export const Auth = (state = {
        isLoading: false,
        user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
        errMess: null,
    }, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {...state,
                isLoading: true,
                user: action.creds
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {...state,
                isLoading: false,
                errMess: null,
                user: action.user,
            };
        case ActionTypes.LOGIN_FAILURE:
            return {...state,
                isLoading: false,
                errMess: action.message
            };
        case ActionTypes.LOGOUT_REQUEST:
            return {...state,
                isLoading: true,
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {...state,
                isLoading: false,
                user: null,
            };

        default:
            return state
    }
}