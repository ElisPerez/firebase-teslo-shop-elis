import { storage } from '../datafirebase/config';

import { getDownloadURL, ref } from 'firebase/storage';

export const getImageUrl = async (myPhoto: string) => {
  const url = await getDownloadURL(ref(storage, `images/${myPhoto}`));
  return url;
};
