import { DocumentData, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';
import { IFruit } from '../interfaces/fruit';
import { Fruit } from '../models';
import { getImageUrl } from '../utils';

// Firestore data converter
export const fruitConverter = {
  toFirestore: (fruit: WithFieldValue<IFruit>) => {
    return {
      name: fruit.name,
      id: fruit.id,
    };
  },

  fromFirestore: async (
    snapshot: QueryDocumentSnapshot<DocumentData>,
    options?: SnapshotOptions
  ) => {
    const data = snapshot.data(options);
    console.log('data image and name:', data.image, data.name);
    // getUrl
    const url = await getImageUrl(data.image); //! He aquí el problema
    // const url = 'https://firebasestorage.googleapis.com/v0/b/tesloshop-firebase-lider.appspot.com/o/images%2Fpi%C3%B1a.jpg?alt=media&token=8a64f3fa-7153-4cfb-92c1-96a8aed78164';

    return new Fruit(snapshot.id, data.name, url);
  },
};
