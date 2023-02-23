import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';
import authReducer from '../auth/reducers/authReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer,
    auth: authReducer,
});

export default rootReducer;
