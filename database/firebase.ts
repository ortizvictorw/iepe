import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIljW-Cu7x8GdZ18W_KSlU4yTk8xHdX7E',
  authDomain: 'registros-transmision.firebaseapp.com',
  projectId: 'registros-transmision',
  storageBucket: 'registros-transmision.appspot.com',
  messagingSenderId: '877883650040',
  appId: '1:877883650040:web:1b7bd3ce7b75d815c4f00d',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
