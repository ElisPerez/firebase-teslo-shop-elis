import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import EditIcon from '@mui/icons-material/Edit';

import { IFruit } from '../../interfaces/fruit';

interface Props {
  fruit: IFruit;
}

export const FruitCard: React.FC<Props> = ({ fruit }) => {
  const { id, name, url } = fruit;
  return (
    <Card key={id} sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {name}
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            {id}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton
            aria-label='edit'
            color='secondary'
            // onClick={() => onEditFruit(id, name)}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            aria-label='delete'
            color='error'
            // onClick={() => onDeleteFruit(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia component='img' sx={{ width: 151 }} image={url} alt={`image ${name}`} />
    </Card>
  );
};
