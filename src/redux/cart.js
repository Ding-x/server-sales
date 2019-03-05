import * as ActionTypes from './ActionTypes';

export const Cart = (state = { 
    cart:localStorage.getItem("cart")?null:localStorage.getItem("cart")}, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEMS:
            return {...state, cart: action.payload};
        default:
            return state;
    }
    
};