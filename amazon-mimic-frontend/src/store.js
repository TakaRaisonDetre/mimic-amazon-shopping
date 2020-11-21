import {productListReducer, productDetailsReducer} from './reducers/productReducer.js'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

const initialState ={};

const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;