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
  deleteDoc,
} from '../datafirebase/config';
import { IFruit } from '../interfaces/fruit';
import { Fruit, fruitConverter } from '../models';

// CRUD

/**
 * CREATE: It creates a new fruit document in the fruits collection
 * @param {string} fruitName - string - The name of the fruit to create.
 * @returns A Promise that resolves to an IFruit or null.
 */
const createFruit = async (fruitName: string): Promise<boolean> => {
  try {
    await addDoc(collection(firestore, 'fruits'), { name: fruitName.toUpperCase() });
    // const docRef = await addDoc(collection(firestore, 'fruits'), { name: fruitName.toUpperCase() });
    // const { id } = docRef;

    // const docSnap = await getDoc(docRef);
    // const { name } = docSnap.data() as { name: string };

    return true;
  } catch (error) {
    console.error('Error adding document: ', error);
    return false;
  }
};

// const readFruit = async (id: string) => {
//   try {
//     // docRef: Name Document
//     const docRef = doc(firestore, 'fruits', `fruits/${id}`);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       // console.log('Document data:', docSnap.data());
//       return docSnap.data();
//     } else {
//       // doc.data() will be undefined in this case
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.log('An error here', error);
//     return null;
//   }
// };

/**
 * READ: It returns a promise that resolves to an array of fruits
 * @returns An array of IFruit objects.
 */
const readAllFruits = async () => {
  let fruits: IFruit[] = [];
  try {
    const querySnapshot = await getDocs(collection(firestore, 'fruits'));
    // console.log('querySnapshot:', querySnapshot);
    querySnapshot.forEach(docSnap => {
      // console.log('docSnap.id:', docSnap.id);
      fruits.push(fruitConverter.fromFirestore(docSnap));
    });

    return fruits;
  } catch (error) {
    console.log('An error here', error);
    return null;
  }
};

const updateFruit = async (id: string, fruitName: string) => {
  // Name Collection
  try {
    const fruitsRef = collection(firestore, 'fruits');

    await setDoc(doc(fruitsRef, id), {
      name: fruitName.toUpperCase(),
    });
    return true;
  } catch (error) {
    console.log('An error here', error);
    return false;
  }
};

/**
 * DELETE: It deletes a fruit document from the fruits collection in Firestore
 * @param {string} id - The id of the document to delete.
 */
const deleteFruit = async (id: string) => {
  await deleteDoc(doc(firestore, 'fruits', id));
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

export { createFruit, readAllFruits, updateFruit, deleteFruit, searchDoc };
