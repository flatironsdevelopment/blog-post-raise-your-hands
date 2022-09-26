import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBag2sZxlLTF2qh7pAeFJLhMhRxZ5HHhKI",
  authDomain: "raise-your-hands-54dbf.firebaseapp.com",
  databaseURL: "https://raise-your-hands-54dbf-default-rtdb.firebaseio.com",
  projectId: "raise-your-hands-54dbf",
  storageBucket: "raise-your-hands-54dbf.appspot.com",
  messagingSenderId: "888047524258",
  appId: "1:888047524258:web:0634bfc06ab916dac5fafb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const collection = "raise-your-hands";

export const getCurrentState = (onStateUpdated: (state: string[]) => void) => {
  const dbRef = ref(database, collection);
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    onStateUpdated(data ?? []);
  });
};

export const setCurrentState = (state: string[]) => {
  set(ref(database, collection), state);
};
