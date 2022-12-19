import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import FolderIcon from '@mui/icons-material/Folder';
// import DeleteIcon from '@mui/icons-material/Delete';

import { AuthLayout } from '../components/layouts';

import ErrorOutline from '@mui/icons-material/ErrorOutline';
import {
  createFruit,
  deleteFruit,
  readAllFruits,
  updateFruit,
} from '../controllers/fruits.controller';
import { IFruit } from '../interfaces/fruit';

type FormData = {
  id?: string;
  fruit: string;
};

export const FruitsPage = () => {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // console.log('errores:', { errors });

  const [showError, setShowError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [fruits, setFruits] = useState<IFruit[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getAllFruits();
  }, []);

  // ? CREATE Function
  const onCreateFruit = async (fruit: string) => {
    setIsButtonDisabled(true);
    setShowError(false);

    const newFruit = await createFruit(fruit);

    if (!newFruit) {
      setIsButtonDisabled(false);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }
    setIsButtonDisabled(false);

    setValue('id', undefined);
    setValue('fruit', '');

    getAllFruits();
  };

  // * READ Function
  const getAllFruits = async () => {
    const allFruits = await readAllFruits();
    if (!allFruits) return;
    setFruits(allFruits);
  };

  // ? UPDATE Function
  const onUpdateFruit = async (id: string, newName: string) => {
    console.log(`id`, id);
    console.log(`newName`, newName);
    setIsButtonDisabled(true);
    setShowError(false);

    const newFruit = await updateFruit(id, newName);

    if (!newFruit) {
      setIsButtonDisabled(false);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }
    setIsButtonDisabled(false);

    getAllFruits();
    setValue('id', undefined);
    setValue('fruit', '');
    setIsEditing(false);
  };

  // !: DELETE Function
  const onDeleteFruit = async (id: string) => {
    await deleteFruit(id);

    getAllFruits();
  };

  const onEditFruit = async (id: string, fruitName: string) => {
    // console.log(id, fruitName);
    setIsEditing(true);
    setValue('id', id);
    setValue('fruit', fruitName);
  };

  const handleFruitSubmit = ({ id, fruit }: { id?: string; fruit: string }) => {
    if (!id) {
      onCreateFruit(fruit);
    } else {
      onUpdateFruit(id, fruit);
    }
  };

  return (
    <AuthLayout title={'Create New Fruit'}>
      <form onSubmit={handleSubmit(handleFruitSubmit)} noValidate>
        <Box sx={{ width: 350, padding: '10px 20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h1' component='h1'>
                Welcome
              </Typography>
              <Chip
                label='No se pudo crear la fruta'
                color='error'
                icon={<ErrorOutline />}
                className='fadeIn'
                sx={{ display: showError ? 'flex' : 'none' }}
              />
            </Grid>

            {isEditing && (
              <Grid item xs={12}>
                <TextField
                  type='text'
                  label='Fruit ID'
                  variant='filled'
                  disabled
                  fullWidth
                  {...register('id', {
                    required: 'This field is required',
                  })}
                  error={!!errors.id}
                  helperText={errors.id?.message}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                type='text'
                label='Create Fruit'
                variant='filled'
                fullWidth
                {...register('fruit', {
                  required: 'This field is required',
                })}
                error={!!errors.fruit}
                helperText={errors.fruit?.message}
              />
            </Grid>

            {isEditing ? (
              <Grid item xs={12}>
                <Button
                  type='submit'
                  color='secondary'
                  className='circular-btn'
                  size='large'
                  fullWidth
                  disabled={isButtonDisabled}
                >
                  EDIT FRUIT
                </Button>
              </Grid>
            ) : (
              <Grid item xs={12}>
                <Button
                  type='submit'
                  color='secondary'
                  className='circular-btn'
                  size='large'
                  fullWidth
                  disabled={isButtonDisabled}
                >
                  CREATE FRUIT
                </Button>
              </Grid>
            )}

            <Divider />

            {fruits.map(({ id, name }) => (
              <Grid container spacing={2} key={id} sx={{ mb: 1 }}>
                <Grid item xs={7}>
                  <Box display={'flex'} flexDirection='column'>
                    <Typography variant='body1'>
                      {name}, {id}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                  <Button variant='text' color='secondary' onClick={() => onEditFruit(id, name)}>
                    EDIT
                  </Button>
                </Grid>
                <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                  <Button variant='text' color='secondary' onClick={() => onDeleteFruit(id)}>
                    DELETE
                  </Button>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default FruitsPage;
