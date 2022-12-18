import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { ProductModel } from '../../../models';

type Data =
  | {
      message: string;
    }
  | IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProductsBySearch(req, res);

    default:
      return res.status(400).json({ message: 'Bad Request' });
  }
}

const getProductsBySearch = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let { q = '' } = req.query;

  if (q.length === 0) {
    return res.status(400).json({ message: 'You must specify the search term' });
  }

  q = q.toString().toLowerCase();

  await db.connect();

  const products = await ProductModel.find({
    $text: { $search: q },
  })
    .select('title images price inStock slug -_id')
    .lean();

  await db.disconnect();

  if (products.length === 0) {
    return res.status(404).json({ message: `No product found with term ${q}` });
  }

  return res.status(200).json(products);
};
