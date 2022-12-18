import Grid from '@mui/material/Grid';
import { IProduct } from '../../interfaces';
import { ProductCard } from './ProductCard';

interface Props {
  products: IProduct[];
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.slug} // todo: Reemplazar por product._id cuando se conecte a database.
        />
      ))}
    </Grid>
  );
};
