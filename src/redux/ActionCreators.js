/*
This file created bunch of actions to modify the data in stores. Later, we can call APIs from backend in this file.

*/

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

export const fetchCart = () => (dispatch) => {
    var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
    dispatch(addItems(cart))
}

export const addItems = (cart) => ({
    type: ActionTypes.ADD_ITEMS,
    payload: cart
});

export const addInToCart = (item) => (dispatch) => {
    var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(addItem(item))
}

export const deleteFromCart = (id) => (dispatch) => {
    var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
    delete cart[id]
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(deleteItem(id))
}

export const clearCart = () => (dispatch) => {
    localStorage.removeItem('cart');
    dispatch(clearItems())
}

export const updateItemInCart = (newItem) => (dispatch) => {
    var cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []
    var i
    for(i=0; i<cart.length;i++){
        if(cart[i].id===newItem.id){
            cart.splice(i,1,newItem)
        }      
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(updateItem(newItem))
}

export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
});

export const deleteItem = (id) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: id
});

export const clearItems = () => ({
    type: ActionTypes.CLEAR_ITEMS
});

export const updateItem = (item) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload:item
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