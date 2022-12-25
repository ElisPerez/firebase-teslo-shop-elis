
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../datafirebase/config';
import { getImageUrl } from './getImageUrl';

/**
 * UPLOAD IMAGE: It uploads a file to the Firebase Storage and returns the reference to the uploaded file
 * @param {Blob} file - Blob, Type File is valid too.
 * @param {string} fileName - The name of the file you want to upload.
 * @returns The name of the image
 */
export const uploadImage = async (file: Blob, fileName: string) => {
  try {
    // Create a storage reference a la carpeta imagenes
    const folderImagesRef = ref(storage, `images/${fileName}`);

    // 'file' comes from the Blob or File API
    const data = await uploadBytes(folderImagesRef, file);

    const url = await getImageUrl(data.ref.name);
    return {
      imageURL: url,
    };
  } catch (error) {
    console.log('An error here', error);
    return null;
  }
};
