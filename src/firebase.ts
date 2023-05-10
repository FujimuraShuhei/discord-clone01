// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA5njg-F5WMvEhR85tdiNcYwM5f2OB6xE4',
  authDomain: 'discord-clone-dbf17.firebaseapp.com',
  projectId: 'discord-clone-dbf17',
  storageBucket: 'discord-clone-dbf17.appspot.com',
  messagingSenderId: '880798141143',
  appId: '1:880798141143:web:5433798c7bb45bfd4dbe92',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
