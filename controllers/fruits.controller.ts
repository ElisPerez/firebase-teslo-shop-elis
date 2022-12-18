import { DocumentData } from 'firebase/firestore';
import {
  collection,
  firestore,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  where,
} from '../datafirebase/config';
import { Fruit, fruitConverter } from '../models';

// CRUD

const createFruit = async (fruitName: string) => {
  try {
    const docRef = await addDoc(collection(firestore, 'fruits'), {
      name: fruitName.toLowerCase(),
    });
    // console.log('Document written with ID: ', fruit.id);
    // const newFruit = fruitConverter.toFirestore(docRef);
    return docRef;
  } catch (error) {
    console.error('Error adding document: ', error);
    return null;
  }
};

const readFruit = async (id: string) => {
  try {
    // docRef: Name Document
    const docRef = doc(firestore, 'fruits', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.log('An error here', error);
    return null;
  }
};

const getAllFruits = async () => {
  let fruits: DocumentData = [];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'fruits'));
    querySnapshot.forEach(doc => {
      fruits.push(fruitConverter.fromFirestore(doc));
    });
    return fruits;
  } catch (error) {
    console.log('An error here', error);
    return null;
  }
};

const updateFruit = async (id: string, nameFruit: string) => {
  // Name Collection
  const fruitsRef = collection(firestore, 'fruits');

  await setDoc(doc(fruitsRef, id), {
    name: nameFruit.toLowerCase(),
  });
};

const deleteFruit = async (id: string) => {
  // const { data } = await axios.get<Interface[]>('/endpoint');
};

// Search
const searchDoc = async (search: string) => {
  try {
    let fruits = [];
    const q = query(collection(firestore, 'fruits'), where('name', '==', search));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      fruits.push(doc.data());

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  } catch (error) {
    console.log('An error here', error);
    return null;
  }
};

export { createFruit, readFruit, getAllFruits, updateFruit, deleteFruit, searchDoc };
