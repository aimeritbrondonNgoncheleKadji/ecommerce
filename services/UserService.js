import { auth, firestore } from './firebase';

export const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const { uid, email } = userCredential.user;
            return firestore.collection('users').doc(uid).set({ email, role: 'user' });
        });
};

export const signInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
    return auth.signOut();
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};

export const getUserRole = async (uid) => {
    const userDoc = await firestore.collection('users').doc(uid).get();
    return userDoc.data()?.role || 'user';
};
