import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: {
        values: ['admin', 'client'],
        message: '{VALUE} no es un role válido',
        default: 'client',
        require: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<IUser> = mongoose.models.User || model('User', userSchema);

export default UserModel;
