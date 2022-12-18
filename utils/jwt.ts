import jwt from 'jsonwebtoken';

export const signToken = (_id: string, email: string) => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('No hay semilla de JWT - Revisar Variables de Entorno');
  }

  // jwt.sign regresa un string
  return jwt.sign(
    // Payload
    { _id, email },

    // Secret Seed
    process.env.JWT_SECRET_SEED,

    // Options
    { expiresIn: '30d' }
  );
};

export const isValidToken = (token: string): Promise<string> => {
  if (!process.env.JWT_SECRET_SEED) {
    throw new Error('No hay semilla de JWT - Revisar Variables de Entorno');
  }

  if(token.length < 10) {
    return Promise.reject('Invalid Token');
  }

  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, process.env.JWT_SECRET_SEED || '', (error, payload) => {
        if (error) return reject('JWT no es válido');

        const { _id } = payload as { _id: string };

        resolve(_id);
      });
    } catch (error) {
      reject('JWT no es válido');
    }
  });
};
