import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';
import { ProductModel, UserModel } from '../../models';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (process.env.NODE_ENV === 'production') {
    return res.status(401).json({ message: 'PERMISSION DENIED (Elis)' });
  }

  await db.connect();

  await UserModel.deleteMany();
  await UserModel.insertMany(seedDatabase.initialData.users);

  // Interaction with the database
  await ProductModel.deleteMany();
  await ProductModel.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  res.status(200).json({ message: 'Process completed successfully' });
}
