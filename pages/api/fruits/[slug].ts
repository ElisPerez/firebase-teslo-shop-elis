import type { NextApiRequest, NextApiResponse } from 'next';
import { NextApiRequestQuery } from 'next/dist/server/api-utils';
import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { ProductModel } from '../../../models';

type Data =
  | {
      message: string;
      query: NextApiRequestQuery; // para ver cual fue la consulta (Leer Readme.md para lo del [slug].ts)
    }
  | IProduct;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'GET':
      return getProductBySlug(req, res);

    default:
      return res.status(400).json({ message: 'Bad request | Elis', query: req.query });
  }
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();

  const { slug } = req.query;
  const product = await ProductModel.findOne({ slug }).lean();

  await db.disconnect();

  if (!product) {
    return res.status(404).json({ message: 'Product not fount', query: req.query });
  }

  return res.status(200).json(product);
};
