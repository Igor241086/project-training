import { db } from "./firebase";
import { collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const productsApi = {
    async getAll() {
        const snapshot = await getDocs(productsCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    async getById(id) {
        const docRef = doc(db, "products", id);
        const snapshot = await getDoc(docRef);
        return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null;
    },
    async create(productData) {
        return await addDoc(productsCollection, productData);
    },
    async update(id, productData) {
        const docRef = doc(db, "products", id);
        await updateDoc(docRef, productData);
    },
    async remove(id) {
        const docRef = doc(db, "products", id);
        await deleteDoc(docRef);
    }
};
