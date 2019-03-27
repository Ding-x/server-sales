import * as ActionTypes from './ActionTypes';
import comboList from '../data/data';
import User from '../data/user';

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));
    dispatch(addProducts(comboList));

}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});

//----------------------------------------------

// export const fetchCart = () => (dispatch) => {
//     const cart = localStorage.getItem('cart')
//     dispatch(addItems(cart))
// }

export const addInToCart = (item) => (dispatch) => {
    dispatch(addItem(item))
}

export const clearCart = () => (dispatch) => {
    localStorage.removeItem('cart');
    dispatch(clearItems())
}

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
});

export const clearItems = () => ({
    type: ActionTypes.CLEAR_ITEMS
});

//--------------------------------------------------

export const requestLogin = (creds) => {
    return {
        type: ActionTypes.LOGIN_REQUEST,
        creds
    }
}
  
export const receiveLogin = (response) => {

    return {
        type: ActionTypes.LOGIN_SUCCESS,
        user: response
    }
}
  
export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    dispatch(requestLogin(creds))

    localStorage.setItem('user', JSON.stringify(User));

    dispatch(receiveLogin(User));
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('user');
    dispatch(receiveLogout())
}