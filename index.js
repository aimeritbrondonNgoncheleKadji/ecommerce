import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { auth, firestore } from './services/firebase';

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "process.env.ADMIN_PASSWORD";

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

AppRegistry.registerComponent(appName, () => App);
