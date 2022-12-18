import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import { db } from '../../../database';
import { UserModel } from '../../../models';
import { jwt } from '../../../utils';

type Data =
  | { message: string }
  | {
      token: string;
      user: {
        email: string;
        name: string;
        role: string;
      };
    };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      return loginUser(req, res);

    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = '', password = '' } = req.body;
  // console.log('Elis', req.body);

  await db.connect();
  const user = await UserModel.findOne({ email }); //! revisar siempre el "await" al consultar models 😬
  await db.disconnect();

  if (!user) {
    return res.status(400).json({ message: 'Invalid Email or Password - EMAIL(BORRAR en prod)' });
  }

  // todo: SOLUCION AL ERROR: (property) IUser.password?: string | undefined Argument of type 'string | undefined' is not assignable to parameter of type 'string'. Type 'undefined' is not assignable to type 'string'.ts(2345)
  // ? bcrypt.compareSync requiere 2 argumentos de tipo string y el segundo argumento puede ser string or undefined, lo cual no lo acepta. Para resolver se agrega al final el "!" para indicar qu estamos seguros que no será undefined (Por las validacionde de los if de arriba)
  if (!bcrypt.compareSync(password, user.password!)) {
    return res
      .status(400)
      .json({ message: 'Invalid Email or Password - PASSWORD(BORRAR en prod)' });
  }

  const { role, name, _id } = user;

  const token = jwt.signToken(_id, email);

  return res.status(200).json({
    token, //jwt
    user: {
      email,
      role,
      name,
    },
  });
};
