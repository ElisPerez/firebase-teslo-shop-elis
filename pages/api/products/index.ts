import type { NextApiRequest, NextApiResponse } from 'next';
import { db, SHOP_CONSTANTS } from '../../../database';
import { IProduct } from '../../../interfaces';
import { ProductModel } from '../../../models';

type Data = { message: string } | IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProducts(req, res);

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
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = 'all' } = req.query;

  let condition = {};

  if (gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender };
  }
  await db.connect();

  const products = await ProductModel.find(condition)
    .select('title images price inStock slug -_id') // INCREIBLE 🤯 Para filtrar por propiedad 😱
    .lean(); // lean(): trae menos información. Una chulada 🤩

  await db.disconnect();

  res.status(200).json(products);
};
