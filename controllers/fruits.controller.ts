
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import { firestore } from '../datafirebase/config';
import { IFruit } from '../interfaces/fruit';
import { Fruit } from '../models';

import {  uploadImage } from '../utils';

// CRUD

/**
 * CREATE: It creates a new fruit document in the fruits collection
 * @param {string} fruitName - string - The name of the fruit to create.
 * @returns A Promise that resolves to an IFruit or null.
 */
const createFruit = async (fruitName: string, image: File): Promise<boolean> => {
  try {
    const data = await uploadImage(image, image.name);

    await addDoc(collection(firestore, 'fruits'), {
      name: fruitName.toUpperCase(),
      imageURL: data?.imageURL,
      imageName: image.name,
    });
    return true;
  } catch (error) {
    console.error('Error adding document: ', error);
    return false;
  }
};

/**
 * READ: It returns a promise that resolves to an array of fruits
 * @returns An array of IFruit objects or null.
 */
const readAllFruits = async (): Promise<IFruit[]> => {
  let fruits: IFruit[] = [];
  // try {
  const querySnapshot = await getDocs(collection(firestore, 'fruits'));
  querySnapshot.forEach(async docSnap => {
    // console.log(docSnap);
    const id = docSnap.id;
    const data = docSnap.data();
    // console.log('data image and name:', data.image, data.name);
    // getUrl
    // const url = data.imageURL;
    // const url = await getImageUrl(data.image);

    let fruit = new Fruit(id, data.name, data.imageURL, data.imageName);
    // let fruit = new Fruit(id, data.name, '/img/no-image.jpg');
    // let fruit = await fruitConverter.fromFirestore(docSnap);
    fruits.push(fruit);
  });
  // console.log('fruits:', fruits);

  return fruits;
  // } catch (error) {
  //   console.log('An error here fruits.controller.ts:', error);
  //   throw new Error('No se pudieron obtener las frutas de Firestore');
  // }
};

/**
 * UPDATE: It updates a fruit document in the fruits collection with the given id and fruitName
 * @param {string} id - string - The id of the document to update
 * @param {string} fruitName - string - The name of the fruit to update
 * @returns A promise that resolves to a boolean.
 */
const updateFruit = async (id: string, fruitName: string): Promise<boolean> => {
  // Name Collection
  try {
    const fruitsRef = collection(firestore, 'fruits');
    await setDoc(doc(fruitsRef, id), {
      name: fruitName.toUpperCase(),
    }, {merge: true});
    return true;
  } catch (error) {
    console.log('An error here', error);
    return false;
  }
};

/**
 * DELETE: It deletes a fruit document from the fruits collection in the firestore database
 * @param {string} id - string - The id of the fruit to delete
 * @returns A promise that resolves to a boolean.
 */
const deleteFruit = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(firestore, 'fruits', id));
    return true;
  } catch (error) {
    console.log('An error here', error);
    return false;
  }
};

export { createFruit, readAllFruits, updateFruit, deleteFruit };
