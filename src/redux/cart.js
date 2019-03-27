import * as ActionTypes from './ActionTypes';

export const Cart = (state = { 

    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []}, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEMS:
            return {...state, cart: action.payload};
        case ActionTypes.ADD_ITEM:
            return {...state, cart: state.cart.concat(action.payload)};
        case ActionTypes.CLEAR_ITEMS:
            return {...state, cart: []};
        default:
            return state;
    }
    
};

