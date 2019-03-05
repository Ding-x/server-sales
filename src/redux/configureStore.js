import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Products} from './products';
import {Cart} from './cart';
import {Auth} from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            auth:Auth,
            cart:Cart
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}