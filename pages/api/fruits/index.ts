import type { NextApiRequest, NextApiResponse } from 'next';

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../datafirebase/config';
import { IFruit } from '../../../interfaces/fruit';
import { Fruit } from '../../../models';
// import { ProductModel } from '../../../models';

type Data = { message: string } | IFruit[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getFruits(req, res);

    default:
      return res.status(400).json({ message: 'Bad Request | Elis' });
  }
}

/** Routes to get the products. Routes like this:
 *
 * All Products:
 * http://localhost:8080/api/products it's the same as http://localhost:8080/api/products?gender=all
 *
 * Products By Category:
 * http://localhost:8080/api/products?gender=men
 * http://localhost:8080/api/products?gender=women
 * http://localhost:8080/api/products?gender=kid
 */
const getFruits = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let fruits: IFruit[] = [];
  // try {
  const querySnapshot = await getDocs(collection(firestore, 'fruits'));
  querySnapshot.forEach(async docSnap => {
    const id = docSnap.id;
    const data = docSnap.data();

    let fruit = new Fruit(id, data.name, data.imageURL, data.imageName);
    fruits.push(fruit);
  });
  // console.log('fruits:', fruits);

  res.status(200).json(fruits);
};
