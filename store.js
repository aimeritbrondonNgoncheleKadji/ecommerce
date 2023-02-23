import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import authReducer from './auth/reducers/authReducer';

const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;