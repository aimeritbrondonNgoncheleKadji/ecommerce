import firebase from '../../firebase';
import { CREATE_USER_SUCCESS, CREATE_USER_ERROR } from '../../actions/types';

export const createUser = (email, password) => {
    return async (dispatch) => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const role = user.email === process.env.ADMIN_EMAIL ? 'admin' : 'user';
            await firebase.firestore().collection('users').doc(user.uid).set({ role });
            dispatch({ type: CREATE_USER_SUCCESS, payload: { user, role } });
        } catch (error) {
            dispatch({ type: CREATE_USER_ERROR, payload: error.message });
        }
    };
};