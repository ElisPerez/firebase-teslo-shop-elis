import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

// Firebase
import { firestore, storage } from '../datafirebase/config';
import { deleteObject, getDownloadURL, ref } from 'firebase/storage';

// Notificaciones MUI
import { useSnackbar } from 'notistack';

// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import EditIcon from '@mui/icons-material/Edit';
import ErrorOutline from '@mui/icons-material/ErrorOutline';

import { FruitLayout } from '../components/layouts';

import { createFruit, readAllFruits, updateFruit } from '../controllers/fruits.controller';
import { IFruit } from '../interfaces/fruit';

// My Components
import { FullScreenLoading } from '../components/ui';

// My Utils
import { uploadImage } from '../utils/uploadImage';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore';

type FormData = {
  id?: string;
  fruitName: string;
  fileList: FileList;
};

export const FruitsPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    getValues,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [fruitsState, setFruitsState] = useState<IFruit[]>([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [imgName, setImgName] = useState('');

  // * READ Function
  const getAllFruits = async () => {
    const allFruits = await readAllFruits();
    setFruitsState([...allFruits]);
    setIsLoadingState(false);
  };

  // useEffect #1
  useEffect(() => {
    getAllFruits();
  }, []);

  // ? CREATE Function
  const onCreateFruit = async (fruit: string, image: File) => {
    setIsButtonDisabled(true);

    const isOK = await createFruit(fruit, image);

    if (!isOK) {
      setIsButtonDisabled(false);
      enqueueSnackbar('!No se pudo crear la fruta!', { variant: 'error' });

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

  // * UPDATE Function
  const onUpdateFruit = async (id: string, newName: string) => {
    setIsButtonDisabled(true);

    const newFruit = await updateFruit(id, newName);

    if (!newFruit) {
      setIsButtonDisabled(false);
      enqueueSnackbar('!No se pudo actualizar la fruta!', { variant: 'error' });

      return;
    }
    setIsButtonDisabled(false);
    enqueueSnackbar(`!Se Actualizó la fruta ${newName.toUpperCase()} satisfactoriamente! 💯`, {
      variant: 'success',
    });

    setValue('id', undefined);
    setValue('fruitName', '');

    setIsEditing(false);

    getAllFruits();
  };

  // ! UPDATE Image
  const onUpdateImageFruit = async (id: string, olderImageName: string, file: File) => {
    setIsButtonDisabled(true);

    try {
      // #1: Eliminar la imagen en Storage
      const imageRef = ref(storage, `images/${olderImageName}`);
      const urlExist = await getDownloadURL(imageRef).catch(error => {
        switch (error.code) {
          case 'storage/object-not-found':
            enqueueSnackbar(`!mira el error del urlExist! 🤷🏻 ${error.code}`, { variant: 'info' });
            return false

          default:
            return false
        }
      });
      if (urlExist) {
        await deleteObject(imageRef).catch(error => {
          switch (error.code) {
            case 'storage/object-not-found':
              return enqueueSnackbar(
                `!La imagen ${olderImageName} no existe en el documento, pero igual la intentarémos actualizar! 🤷🏻 `,
                { variant: 'info' }
              );

            default:
              return enqueueSnackbar(`!NO SE QUE RAYOS ESTÁ PASANDO AQUI! 🤷🏻 `, {
                variant: 'info',
              });
          }
        });
      } else {
        enqueueSnackbar(
          `!La imagen ${olderImageName} no existe en el documento, pero igual la intentarémos actualizar! 🤷🏻 `,
          { variant: 'info' }
        );
      }
    } catch (error) {
      enqueueSnackbar(`!mira el error del tryCatch! 🤷🏻 ${error}`, { variant: 'info' });
    }

    try {
      // #2: Subir la nueva imagen y optener el name y el url
      const data = await uploadImage(file, file.name);

      // #3: Actualizar el documento en Firestore
      const fruitsRef = collection(firestore, 'fruits');
      await setDoc(
        doc(fruitsRef, id),
        {
          imageName: file.name,
          imageURL: data?.imageURL,
        },
        { merge: true }
      );

      setIsButtonDisabled(false);
      enqueueSnackbar(
        `!Se Actualizó la imagen ${olderImageName.toUpperCase()} a ${file.name.toUpperCase()} satisfactoriamente! 💯`,
        {
          variant: 'success',
        }
      );

      setValue('id', undefined);
      setValue('fruitName', '');

      setIsEditingImage(false);

      getAllFruits();
    } catch (error) {
      console.log({ error });
      setIsButtonDisabled(false);
      enqueueSnackbar('!No se pudo actualizar la fruta!', { variant: 'error' });

      return;
    }
  };

  // !: DELETE Function
  const onDeleteFruit = async (id: string, imageName: string) => {
    // Store:
    const imageRef = ref(storage, `images/${imageName}`);

    try {
      await Promise.all([
        // Store
        await deleteObject(imageRef),

        // Firestore:
        deleteDoc(doc(firestore, 'fruits', id)),
      ]);

      enqueueSnackbar('!Me eliminaste! 😵', { variant: 'info' });

      getAllFruits();
    } catch (error) {
      console.log('An error here', error);
      enqueueSnackbar('!No se eliminó! 🤷🏻 (mira el error en la consola)', { variant: 'error' });
    }
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

  const onHandleImageFruit = async () => {
    const myId = getValues().id!;
    const myFile = getValues().fileList[0];
    if (!myFile) {
      return enqueueSnackbar('!Seleccione una imagen a subir', { variant: 'error' });
    }
    await onUpdateImageFruit(myId, imgName, myFile);
  };

  const handleFruitSubmit = ({ id, fruitName, fileList }: FormData) => {
    if (!id) {
      const image = fileList[0];
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
            </Grid>

            {(isEditing || isEditingImage) && (
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

            {!isEditingImage && (
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
            )}

            {!isEditing && (
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
            )}

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
                    onClick={onHandleImageFruit}
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
              <Card key={id} sx={{ display: 'flex', marginBottom: 3, boxShadow: 10 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h5'>
                      {name}
                    </Typography>
                    <Typography variant='subtitle1' color='text.secondary' component='div'>
                      {id}
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      pl: 1,
                      pb: 1,
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <Button
                      variant='contained'
                      aria-label='edit'
                      // Function
                      onClick={() => onEditFruitName(id, name)}
                    >
                      <EditIcon color='secondary' />
                    </Button>
                    <Button
                      variant='contained'
                      aria-label='delete'
                      // Function
                      onClick={() => onDeleteFruit(id, imageName)}
                    >
                      <DeleteIcon color='error' />
                    </Button>
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
