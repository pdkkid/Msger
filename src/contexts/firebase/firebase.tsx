import firebase from "firebase";
import React, { createContext } from "react";
import { FC } from "react";
import { IFirebaseContext } from "./types";

export const FirebaseContext = createContext<IFirebaseContext>(
  {} as IFirebaseContext
);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const FirebaseProvider: FC = ({ children }) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return (
    <div>
      <FirebaseContext.Provider
        value={{ firebase: firebase.app() } as IFirebaseContext}
      >
        {children}
      </FirebaseContext.Provider>
    </div>
  );
}
