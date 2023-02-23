// src/auth/actions/authActions.js

import { SET_CURRENT_USER } from '../../actions/types';
import firebase from '../../services/firebase';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user,
    };
};

export const login = (email, password) => async (dispatch) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        dispatch(setCurrentUser(firebase.auth().currentUser));
    } catch (error) {
        console.log('Login error:', error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        await firebase.auth().signOut();
        dispatch(setCurrentUser(null));
    } catch (error) {
        console.log('Logout error:', error);
    }
};

export const register = (email, password) => async (dispatch) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        dispatch(setCurrentUser(firebase.auth().currentUser));
    } catch (error) {
        console.log('Registration error:', error);
    }
};
