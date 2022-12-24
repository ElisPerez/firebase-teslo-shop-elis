import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Notificaciones MUI
import { VariantType, useSnackbar } from 'notistack';

// import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material'; // No usar asi porque es mas lento en dev.
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
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
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import FilterIcon from '@mui/icons-material/Filter';

import EditIcon from '@mui/icons-material/Edit';

import { FruitLayout } from '../components/layouts';

import ErrorOutline from '@mui/icons-material/ErrorOutline';
import {
  createFruit,
  deleteFruit,
  readAllFruits,
  updateFruit,
} from '../controllers/fruits.controller';
import { IFruit } from '../interfaces/fruit';

// todo: Mover al controller
import {
  ref,
  storage,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  FullMetadata,
  StorageReference,
} from '../datafirebase/config';
import { FruitCard } from '../components/fruits/FruitCard';
import { useFruits } from '../hooks';
import { FullScreenLoading } from '../components/ui';

type FormData = {
  id?: string;
  fruitName: string;
  fileList: FileList;
};

export const FruitsPage = () => {
  // const { isError, isLoading, fruits } = useFruits('/fruits');
  // Notificaciones MUI
  const { enqueueSnackbar } = useSnackbar();
  
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  // console.log('errores:', { errors });
  
  const [showError, setShowError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [fruitsState, setFruitsState] = useState<IFruit[]>([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imgName, setImgName] = useState('');
  
  // const [isMounted, setIsMounted] = useState(false);

  // * READ Function
  const getAllFruits = async () => {
    const allFruits = await readAllFruits();
    console.log('allFruits:', allFruits);
    // if (!allFruits) return;
    setFruitsState([...allFruits]);
    setIsLoadingState(false);
  };

  // useEffect #1
  useEffect(() => {
    getAllFruits();
  }, []);

  // useEffect #1
  // useEffect(() => {
  //   if (!isMounted) {
  //     getAllFruits();
  //     setIsMounted(true);
  //   }
  // }, [isMounted]);

  // Imagenes
  // const [archivoUrl, setArchivoUrl] = useState('');
  // const [docus, setDocus] = useState([]);

  // ? CREATE Function
  const onCreateFruit = async (fruit: string, image: File) => {
    setIsButtonDisabled(true);
    setShowError(false);

    const newFruit = await createFruit(fruit, image);

    if (!newFruit) {
      setIsButtonDisabled(false);
      setShowError(true);
      enqueueSnackbar('!No se pudo crear la fruta!', { variant: 'error' });

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }

    setIsButtonDisabled(false);
    enqueueSnackbar(`!Se creó la fruta ${fruit.toUpperCase()} satisfactoriamente!`, {
      variant: 'success',
    });

    setValue('id', undefined);
    setValue('fruitName', '');

    // TODO: !!!
    getAllFruits();
    // window.location.reload();
  };

  // ? UPDATE Function
  const onUpdateFruit = async (id: string, newName: string) => {
    setIsButtonDisabled(true);
    setShowError(false);

    const newFruit = await updateFruit(id, newName);

    if (!newFruit) {
      setIsButtonDisabled(false);
      setShowError(true);
      enqueueSnackbar('!No se pudo crear la fruta!', { variant: 'error' });

      setTimeout(() => {
        setShowError(false);
      }, 3000);

      return;
    }
    setIsButtonDisabled(false);
    enqueueSnackbar(`!Se Actualizó la fruta ${newName.toUpperCase()} satisfactoriamente! 💯`, {
      variant: 'success',
    });

    setValue('id', undefined);
    setValue('fruitName', '');

    setIsEditing(false);

    // TODO: !!!
    getAllFruits();
    // window.location.reload();
  };

  // !: DELETE Function
  const onDeleteFruit = async (id: string) => {
    await deleteFruit(id);
    enqueueSnackbar('!Me eliminaste! 😵', { variant: 'info' });

    // TODO: !!!
    getAllFruits();
    // window.location.reload();
  };

  const onEditFruitName = async (id: string, fruitName: string) => {
    setValue('id', id);
    setValue('fruitName', fruitName);
    setIsEditing(true);
  };

  const onEditFruitImage = async (id: string, imageName: string) => {
    setValue('id', id);
    setImgName(imageName);
    setIsEditingImage(true);
  };

  const handleFruitSubmit = ({ id, fruitName, fileList }: FormData) => {
    const image = fileList[0];
    if (!id) {
      onCreateFruit(fruitName, image);
    } else {
      onUpdateFruit(id, fruitName);
    }
  };

  const onCancelEdit = () => {
    setIsEditing(false);
    setValue('fruitName', '');
    setValue('id', '');
  };

  const onCancelEditImage = () => {
    setIsEditingImage(false);
    setValue('fruitName', '');
    setValue('id', '');
  };

  return (
    <FruitLayout title={'Create New Fruit'}>
      <form onSubmit={handleSubmit(handleFruitSubmit)} noValidate>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          sx={{ width: 500, padding: '10px 20px' }}
        >
          <Grid container spacing={2} sx={{ width: 400 }}>
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
                {...register('fruitName', {
                  required: 'This field is required',
                })}
                error={!!errors.fruitName}
                helperText={errors.fruitName?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='file'
                // label='Fruit Image'
                variant='filled'
                fullWidth
                {...register('fileList', {
                  required: 'This field is required',
                })}
                error={!!errors.fileList}
                helperText={errors.fileList?.message}
              />
            </Grid>

            {isEditing ? (
              <>
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

                <Grid item xs={12}>
                  <Button
                    onClick={onCancelEdit}
                    color='primary'
                    className='circular-btn'
                    size='large'
                    fullWidth
                    disabled={isButtonDisabled}
                  >
                    CANCEL
                  </Button>
                  <br />
                  <br />
                  <Divider>
                    <Chip label='Fruit List' />
                  </Divider>
                  <br />
                  <br />
                </Grid>
              </>
            ) : isEditingImage ? (
              <>
                <Grid item xs={12}>
                  <Button
                    type='submit'
                    color='secondary'
                    className='circular-btn'
                    size='large'
                    fullWidth
                    disabled={isButtonDisabled}
                  >
                    EDIT FRUIT Image
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={onCancelEditImage}
                    color='primary'
                    className='circular-btn'
                    size='large'
                    fullWidth
                    disabled={isButtonDisabled}
                  >
                    CANCEL
                  </Button>
                  <br />
                  <br />
                  <Divider>
                    <Chip label='Fruit List' />
                  </Divider>
                  <br />
                  <br />
                </Grid>
              </>
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
                <br />
                <br />
                <Divider>
                  <Chip label='Fruit List' />
                </Divider>
                <br />
                <br />
              </Grid>
            )}
          </Grid>
          {isLoadingState ? (
            <FullScreenLoading />
          ) : (
            fruitsState.map(({ id, name, imageName, imageURL }) => (
              <Card key={id} sx={{ display: 'flex', marginBottom: 3 }}>
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
                    <CardActionArea
                        aria-label='edit'
                        color='secondary'
                        // Function
                        onClick={() => onEditFruitName(id, name)}
                      >
                        <EditIcon />
                    </CardActionArea>
                    <CardActionArea
                        aria-label='delete'
                        color='error'
                        // Function
                        onClick={() => onDeleteFruit(id)}
                      >
                        <DeleteIcon />
                    </CardActionArea>
                  </Box>
                </Box>
                <CardActionArea
                  // Function
                  onClick={() => onEditFruitImage(id, imageName)}
                >
                  <CardMedia
                    component='img'
                    sx={{ width: 151 }}
                    image={imageURL}
                    alt={`image ${name}`}
                  />
                </CardActionArea>
              </Card>
            ))
          )}
        </Box>
      </form>
    </FruitLayout>
  );
};

export default FruitsPage;
