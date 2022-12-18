import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from '../datafirebase/config';
import { IFruit } from '../interfaces/fruit';

export class Fruit {
  name: string;
  id: string;
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
}

// Firestore data converter
export const fruitConverter = {
  toFirestore: (fruit: WithFieldValue<IFruit>) => {
    return {
      name: fruit.name,
      id: fruit.id,
    };
  },

  fromFirestore: (snapshot: QueryDocumentSnapshot<DocumentData>, options?: SnapshotOptions) => {
    const data = snapshot.data(options);
    // console.log(data);
    return new Fruit(snapshot.id, data.name);
  },
};
