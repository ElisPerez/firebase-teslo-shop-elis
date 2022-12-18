import mongoose, { Model, Schema } from 'mongoose';
import { IProduct } from '../interfaces';

// interface InterfaceName {}

const productSchema = new Schema(
  {
    description: { type: String, require: true },
    images: [{ type: String }],
    inStock: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          // enum: Enumeración.
          values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
          message: '{VALUE} is not an allowed value', // Se mostrará este mensaje en caso que no sea un valor valido.
        },
      },
    ],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true },
    type: {
      type: String,
      enum: {
        // enum: Enumeración.
        values: ['shirts', 'pants', 'hoodies', 'hats'],
        message: '{VALUE} is not an allowed value', // Se mostrará este mensaje en caso que no sea un valor valido.
      },
    },
    gender: {
      type: String,
      enum: {
        // enum: Enumeración.
        values: ['men', 'women', 'kid', 'unisex'],
        message: '{VALUE} is not an allowed value', // Se mostrará este mensaje en caso que no sea un valor valido.
      },
    },
  },
  { timestamps: true }
  // { collection: 'products' } // Custom collection name (new Schema no acepta mas de 2 argumentos) 😎
);

// ?: Create index for search
productSchema.index({ title: 'text', tags: 'text' });

const ProductModel: Model<IProduct> = mongoose.models.Product || mongoose.model('Product', productSchema); // Utiliza el modelo existente or crea uno.

  // Configuración para extraer variables al usar el metodo toJSON. Cada vez que se usa el methodo toJSON (res.status(200).json({...})) Se aplican estos cambios:
// productSchema.method('toJSON', function () {
//   const { __v, _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// });

export default ProductModel;
