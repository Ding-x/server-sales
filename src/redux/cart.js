import * as ActionTypes from './ActionTypes';

export const Cart = (state = { 

    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem('cart')) : []}, action) => {
    switch(action.type){
        case ActionTypes.ADD_ITEMS:
            return {...state, cart: action.payload};
        case ActionTypes.ADD_ITEM:
            return {...state, cart: state.cart.concat(action.payload)};
        case ActionTypes.DELETE_ITEM:
            var tmp1 = state.cart
            delete tmp1[action.payload]
            return {...state, cart: tmp1};
        case ActionTypes.CLEAR_ITEMS:
            return {...state, cart: []};
        case ActionTypes.UPDATE_ITEM:
            var tmp2 = state.cart
            var i
            for(i=0; i<tmp2.length;i++){
                if(tmp2[i].id===action.payload.id){
                   tmp2.splice(i,1,action.payload)
                }
                    
            }
            return {...state, cart: tmp2};
        default:
            return state;
    }
    
};

