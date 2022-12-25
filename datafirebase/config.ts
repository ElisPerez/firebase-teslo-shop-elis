import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(firebase);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
// const storageRef = ref(storage); // ?: Esta referencia apunta a la raiz de storage, la imagen se guardaría en la raíz y no dentro de una carpeta.

export { firebase, firestore, storage };
