import { createContext, useContext, useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { useFirebase } from './useFirebase';

type IUser = firebase.User | null;

export interface IUseAuth {
  user: IUser;
}

const AuthContext = createContext<IUser>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const { firebaseApp } = useFirebase()
  const [user, setUser] = useState<IUser>(null);
  
  useEffect(() => {
    if (!firebaseApp) {
      return;
    }
    firebaseApp.auth().onAuthStateChanged((user) => {
      console.log('auth change', user);
      setUser(user);
    }, (err) => {
      console.warn('Failed to auth firebase', err);
      setUser(null);
    });
    return () => {
      setUser(null);
    };
  }, []);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): IUseAuth => {
  const user = useContext(AuthContext);
  return {
    user,
  };
}