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
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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

type FormData = {
  id?: string;
  fruitName: string;
  fileList: FileList;
};

export const FruitsPage = () => {
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
  const [fruits, setFruits] = useState<IFruit[]>([]);
  const [isEditing, setIsEditing] = useState(false);

  // Imagenes
  // const [archivoUrl, setArchivoUrl] = useState('');
  // const [docus, setDocus] = useState([]);

  const uploadFileAndMetaData = async (file: Blob) => {
    const storageRef = ref(storage, 'images/mountains.jpg');

    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: 'image/jpeg',
    };

    // Upload the file and metadata
    const uploadTask = uploadBytes(storageRef, file, metadata);
  };

  const watchProgressUpload = async (file: Blob) => {
    const storageRef = ref(storage, 'images/rivers.jpg');

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      error => {
        // Handle unsuccessful uploads
        console.log('No se pudo cargar la imagen. Error:', error);
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            console.log(error.code);
            break;
          case 'storage/canceled':
            // User canceled the upload
            console.log(error.code);
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            console.log(error.code);
            break;
        }
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          console.log('File available at', downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    getAllFruits();
  }, []);

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

    getAllFruits();

    setValue('id', undefined);
    setValue('fruitName', '');

    setIsEditing(false);
  };

  // !: DELETE Function
  const onDeleteFruit = async (id: string) => {
    await deleteFruit(id);
    enqueueSnackbar('!Me eliminaste! 😵', { variant: 'info' });
    getAllFruits();
  };

  const onEditFruit = async (id: string, fruitName: string) => {
    setValue('id', id);
    setValue('fruitName', fruitName);
    setIsEditing(true);
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
            {/* //todo:cambiar input */}
            <Grid item xs={12}>
              {/* <form onSubmit={submitHandler}> */}
              <TextField
                type='file'
                label='Fruit Image'
                variant='filled'
                fullWidth
                {...register('fileList', {
                  required: 'This field is required',
                })}
                error={!!errors.fileList}
                helperText={errors.fileList?.message}
              />

              {/* <input type='file' onChange={archivoHandler} />
              <input type='text' name='nombre' placeholder='nombra tu archivo' /> */}
              {/* <button>Enviar </button> */}
              {/* </form> */}
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

          {fruits.map(({ id, name, url }) => (
            <>
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
                    onClick={() => onEditFruit(id, name)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton aria-label='delete' color='error' onClick={() => onDeleteFruit(id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardMedia component='img' sx={{ width: 151 }} image={url} alt={`image ${name}`} />
            </Card>
              {/* Other option */}
              <Grid
                container
                justifyContent={'center'}
                spacing={2}
                key={id}
                sx={{ mb: 2.5, border: '1px solid rgba(0,0,0, .1)', borderRadius: 2 }}
              >
                <Grid item xs={7}>
                  <Box display={'flex'} flexDirection='column'>
                    {/* image here */}
                  </Box>
                </Grid>
                <Grid item xs={7}>
                  <Box display={'flex'} flexDirection='column'>
                    <Typography variant='body1'>{`ID: ${id}`}</Typography>
                    <Typography variant='body1' color={'blue'}>
                      {`Name: ${name}`}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                  <Button variant='text' color='secondary' onClick={() => onEditFruit(id, name)}>
                    EDIT
                  </Button>
                </Grid>
                <Grid item xs={2} display='flex' flexDirection='column' alignItems='center'>
                  <Button variant='text' color='error' onClick={() => onDeleteFruit(id)}>
                    <DeleteIcon />
                  </Button>
                </Grid>
              </Grid>
            </>
          ))}
        </Box>
      </form>
    </FruitLayout>
  );
};

export default FruitsPage;
