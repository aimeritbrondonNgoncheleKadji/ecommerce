import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import AppNavigator from './navigation/AppNavigator';
import { initializeApp } from 'firebase/app';

import { auth, firestore } from './services/firebase';


const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "process.env.ADMIN_PASSWORD";

  useEffect(() => {
    if (ADMIN_EMAIL && ADMIN_PASSWORD) {
      // Check if admin user already exists
      auth.getUserByEmail(ADMIN_EMAIL)
        .then(() => {
          console.log('Admin user already exists.');
        })
        .catch(() => {
          // Admin user doesn't exist, create new account
          auth.createUserWithEmailAndPassword(ADMIN_EMAIL, ADMIN_PASSWORD)
            .then(({ user }) => {
              // Set role to 'admin' in user document
              firestore.collection('users').doc(user.uid).set({ email: user.email, role: 'admin' });
              console.log('Admin user account created successfully.');
            })
            .catch((error) => {
              console.error(error.message);
            });
        });
    }
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
