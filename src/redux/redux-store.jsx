import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import filter from "./filter";
import sushi from "./sushi";
import cart from "./cart";

const rootReducer = combineReducers({
    filter,
    sushi,
    cart
});

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhansers(applyMiddleware(thunk)));

window.store = store;

export default store;
