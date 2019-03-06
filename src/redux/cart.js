import * as ActionTypes from './ActionTypes';

export const Cart = (state = { 

    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : null}, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEMS:
            return {...state, cart: action.payload};
        default:
            return state;
    }
    
};