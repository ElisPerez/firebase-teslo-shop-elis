import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  WithFieldValue,
} from '../datafirebase/config';
import { IFruit } from '../interfaces/fruit';
import { getImageUrl } from '../utils';

export class Fruit {
  name: string;
  id: string;
  url: string;
  constructor(id: string, name: string, url: string) {
    this.name = name;
    this.id = id;
    this.url = url;
  }
}

