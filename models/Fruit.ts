import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from '../datafirebase/config';
import { IFruit } from '../interfaces/fruit';

export class Fruit {
  name = '';
  id = '';
  constructor(id: string, name: string) {
    this.name = name;
    this.id = id;
  }
  toString() {
    return this.name + ', ' + this.id;
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
    return new Fruit(data.name, data.id);
  },
};
