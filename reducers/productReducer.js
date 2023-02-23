// src/reducers/productReducer.js

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_RESET,
} from '../actions/types';

const initialState = {
    products: [],
    loading: false,
    error: null,
    product: {},
    createSuccess: false,
    updateSuccess: false,
    deleteSuccess: false,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                loading: false,
                createSuccess: true,
                product: action.payload,
            };
        case PRODUCT_CREATE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return { ...state, createSuccess: false };
        case PRODUCT_UPDATE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateSuccess: true,
                product: action.payload,
            };
        case PRODUCT_UPDATE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return { ...state, updateSuccess: false };
        case PRODUCT_DELETE_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                deleteSuccess: true,
                products: state.products.filter((p) => p.id !== action.payload),
            };
        case PRODUCT_DELETE_FAIL:
            return { ...state, loading: false, error: action.payload };
        case PRODUCT_DELETE_RESET:
            return { ...state, deleteSuccess: false };
        default:
            return state;
    }
}
