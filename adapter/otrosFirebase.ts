import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../datafirebase/config';

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