import { firestore } from './firebase';
import { collection, getDocs, getDoc } from "firebase/firestore";

class ProductService {
    async getProducts() {

        const querySnapshot = await getDocs(collection(firestore, 'products'));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    }

    async getProductId(id) {
        (await getDoc(collection(firestore, 'products', "")))
        const product = await firebase.firestore().collection('products').doc(id).get();
        return { id: product.id, ...product.data() };
    }

    async getAllProducts() {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        const querySnapshot = await productsCollection.get();
        const products = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        });
        return products;
    }

    async addProduct(product) {
        const db = getFirestore();
        const productsCollection = collection(db, 'products');
        const docRef = await addDoc(productsCollection, product);
        return docRef.id;
    }

    async deleteProduct(productId) {
        const db = getFirestore();
        const productDoc = doc(db, 'products', productId);
        await deleteDoc(productDoc);
    }

    async updateProduct(productId, updatedFields) {
        const db = getFirestore();
        const productDoc = doc(db, 'products', productId);
        await updateDoc(productDoc, updatedFields);
    }
}

export default new ProductService();