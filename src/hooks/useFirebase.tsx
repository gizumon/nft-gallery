import { createContext, useState, useEffect, useContext } from 'react';
// import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app"
import 'firebase/compat/firestore'
import { getAnalytics } from 'firebase/analytics';


interface IUseFirebase {
  firebase: firebase.app.App | undefined;
  db: firebase.firestore.Firestore | undefined;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const FirebaseContext = createContext<firebase.app.App | undefined>(undefined);

export const FirebaseProvider: React.FC = ({ children }) => {
  const [app, setApp] = useState<firebase.app.App>();
  
  useEffect(() => {
    
    const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
    setApp(firebaseApp);
    
    (window as any)['TEMP'] = firebaseApp

    if (process.env.NODE_ENV === 'production') {
      getAnalytics(firebaseApp);
    }
    const unsubscribe = () => {};
    return unsubscribe;
  }, []);

  return (
    <FirebaseContext.Provider value={app}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = (): IUseFirebase => {
  const firebaseApp = useContext(FirebaseContext);
  return {
    firebase: firebaseApp,
    db: firebaseApp?.firestore(),
  }
}
