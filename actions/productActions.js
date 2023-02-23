import { FETCH_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './types';
import ProductService from '../services/ProductService';

export const fetchProducts = () => async (dispatch) => {
    const products = await ProductService.getProducts();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
    });
};

export const createProduct = (product) => async (dispatch) => {
    await ProductService.createProduct(product);
    dispatch({
        type: CREATE_PRODUCT,
        payload: product,
    });
};

export const updateProduct = (productId, product) => async (dispatch) => {
    await ProductService.updateProduct(productId, product);
    dispatch({
        type: UPDATE_PRODUCT,
        payload: { productId, product },
    });
};

export const deleteProduct = (productId) => async (dispatch) => {
    await ProductService.deleteProduct(productId);
    dispatch({
        type: DELETE_PRODUCT,
        payload: productId,
    });
};