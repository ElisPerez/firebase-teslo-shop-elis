import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';

import { db } from '../../../database';
import { UserModel } from '../../../models';
import { jwt, validations } from '../../../utils';

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
      return registerUser(req, res);

    default:
      res.status(400).json({
        message: 'Bad request',
      });
  }
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const {
    email = '',
    password = '',
    name = '',
  } = req.body as { email: string; password: string; name: string };
  // console.log('Elis', req.body);

  if (password.length < 6) {
    return res.status(400).json({ message: 'La contraseña debe ser mayor a 6 caracteres' });
  }

  if (name.length < 3) {
    return res.status(400).json({ message: 'El nombre debe ser mayor a 2 caracteres' });
  }

  if (!validations.isValidEmail(email )) {
    return res.status(400).json({ message: 'Correo no válido' });
  }

  await db.connect();
  const user = await UserModel.findOne({ email }); //! revisar siempre el "await" al consultar models 😬

  if (user) {
    await db.disconnect();
    return res.status(400).json({ message: 'Ese email ya está registrado ' });
  }

  const newUser = new UserModel({
    email: email.toLowerCase(),
    password: bcrypt.hashSync(password),
    role: 'client',
    name,
  });

  try {
    await newUser.save({ validateBeforeSave: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Revisar logs del servidor',
    });
  }

  const { _id, role } = newUser;

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
