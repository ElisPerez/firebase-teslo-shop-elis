import { storage } from '../datafirebase/config';

import { getDownloadURL, ref } from 'firebase/storage';

export const getImageUrl = async (myPhoto: string) => {
  // try {
    const url = await getDownloadURL(ref(storage, `images/${myPhoto}`));
    return url;
  // } catch (error) {
  //   console.log('An error here', error);
  //   throw new Error("No se obtuvo la url de la imagen sabrá Dios porqué...");
    
  // }
};
// readImage('');