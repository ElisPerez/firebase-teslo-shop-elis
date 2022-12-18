import { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

// import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import { AuthLayout } from '../components/layouts';
import { tesloApi } from '../api';
import { validations } from '../utils';

import ErrorOutline from '@mui/icons-material/ErrorOutline';
import { createFruit, deleteFruit, readAllFruits } from '../controllers/fruits.controller';
import { IFruit } from '../interfaces/fruit';
// import { IFruit } from '../../interfaces/fruit';

type FormData = {
  fruit: string;
};

export const FruitsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // console.log('errores:', { errors });

  const [showError, setShowError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [fruits, setFruits] = useState<IFruit[]>([]);

  const getAllFruits = async () => {
    const allFruits = await readAllFruits();
    if (!allFruits) return;
    setFruits(allFruits);
  };

  useEffect(() => {
    getAllFruits();
  }, []);

  // ? CREATE Function
  const onCreateFruit = async ({ fruit }: FormData) => {
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

    getAllFruits();
  };

  // !: DELETE Function
  const onDeleteFruit = async (id: string) => {
    await deleteFruit(id);

    getAllFruits();
  };

  return (
    <AuthLayout title={'Create New Fruit'}>
      <form onSubmit={handleSubmit(onCreateFruit)} noValidate>
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
