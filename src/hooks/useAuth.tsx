import { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { useFirebase } from './useFirebase';

// Argument type of onAuthStateChanged function
export type IUser = firebase.User | undefined;

export interface IUseAuth {
  user: IUser;
  isInitialized: boolean;
  isLogin: boolean;
}

const AuthContext = createContext<IUser>(undefined);
const AuthInitializeContext = createContext<boolean>(false);

export const AuthProvider: React.FC = ({ children }) => {
  const { firebaseApp } = useFirebase()
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>(undefined);
  
  useEffect(() => {
    if (!firebaseApp) {
      console.log('firebase unmount');
      return;
    }
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log('auth change', user);
      setUser(user || undefined);
      setIsInitialized(true);
    }, (err) => {
      console.warn('Failed to auth firebase', err);
      setUser(undefined);
      setIsInitialized(true);
    });
    return () => {
      setUser(undefined);
      setIsInitialized(false);
    };
  }, [firebaseApp]);

  return (
    <AuthInitializeContext.Provider value={isInitialized}>
      <AuthContext.Provider value={user}>
        {children}
      </AuthContext.Provider>
    </AuthInitializeContext.Provider>
  );
};

export const useAuth = (): IUseAuth => {
  const user = useContext(AuthContext);
  const isInitialized = useContext(AuthInitializeContext);
  return {
    user,
    isInitialized,
    isLogin: !!user?.uid,
  };
}
