export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;

  // Al tener la propiedad {timestamps: true} en el userSchema, crea estas variables:
  createdAt?: string;
  updatedAt?: string;
}
