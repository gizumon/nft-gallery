import { createContext, useState, useEffect, useContext } from 'react';
// import { FirebaseApp, getApp, getApps, initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_STORAGE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

interface IFirebaseContext {
  firebaseApp: typeof firebase | undefined;
  getFirebase: () => Promise<typeof firebase | undefined>;
}

const FirebaseContext = createContext<IFirebaseContext>({
  firebaseApp: undefined,
  getFirebase: async () => undefined,
});

const initialize = async () => {
  if (typeof window === 'undefined') return

  await Promise.all([
    import('firebase/compat/auth'),
    import('firebase/compat/firestore'),
    import('firebase/compat/storage'),
    import('firebase/compat/analytics'),
  ]);

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  return firebase;
}
const promise = initialize();

const FirebaseProvider: React.FC = ({ children }) => {
  const [firebaseApp, setFirebaseApp] = useState<typeof firebase | undefined>()

  useEffect(() => {
    (async () => {
      setFirebaseApp(await promise)
    })()
  }, [])

  return (
    <FirebaseContext.Provider value={{ firebaseApp, getFirebase: () => promise }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContext;
export { FirebaseProvider }

// const FirebaseContext = createContext<firebase.app.App | undefined>(undefined);
// 
// export const FirebaseProvider: React.FC = ({ children }) => {
//   const [app, setApp] = useState<firebase.app.App>();
  
//   useEffect(() => {
//     console.log('firebase provider run')
//     const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
//     setApp(firebaseApp);

//     if (process.env.NODE_ENV === 'production') {
//       getAnalytics(firebaseApp);
//     }
//     const unsubscribe = () => {

//     };
//     return unsubscribe;
//   }, []);

//   return (
//     <FirebaseContext.Provider value={app}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

export const useFirebase = (): IFirebaseContext => {
  const firebaseApp = useContext(FirebaseContext);

  return firebaseApp;
}
