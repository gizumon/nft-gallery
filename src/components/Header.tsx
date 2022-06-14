import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import FirebaseLoginUI from '../components/FirebaseLoginUI';
import styles from '../styles/Header.module.scss';
import { IUser, useAuth } from '../hooks/useAuth';
import { useFirebase } from '../hooks/useFirebase';
import { ButtonWithBottomText } from './ButtonWithBottomText';
import { getInitialCharToUpper } from '../utils/strings';
import { Logo } from './Logo';

interface ILoginUserProps {
  isInitialized: boolean;
  isLogin: boolean;
  user: IUser;
  onClickLogout: (event?: React.MouseEvent<HTMLElement>) => void;
}

const LoginUser: React.FC<ILoginUserProps> = ({isInitialized, isLogin, user, onClickLogout}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>(undefined);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event?: React.MouseEvent<HTMLElement>) => setAnchorEl(event?.currentTarget || undefined);
  const handleClose = () => setAnchorEl(undefined);
  
  if (!isInitialized) {
    return (<></>);
  }
  if (!isLogin || !user) {
    return (
      <>
        <ButtonWithBottomText iconEl={<Avatar><PersonIcon /></Avatar>} text="LOGIN" onClick={handleClick}/>
        <Menu
          anchorEl={anchorEl}
          open={isOpen}
          onClick={handleClose}
          onClose={handleClose}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
            },
          }}
        >
          <div className={styles.btnBlocks}>
            <FirebaseLoginUI />
          </div>
        </Menu>
      </>
    );
  }
  const userName = user.displayName || 'USER';
  const iconEl = user.photoURL ? <Avatar alt={userName} src={user.photoURL || ''} />
                               : <Avatar alt={userName} >{user.displayName ? getInitialCharToUpper(user.displayName) : '?'}</Avatar>

  return (
    <ButtonWithBottomText iconEl={iconEl} text="LOGOUT" onClick={onClickLogout}/>
  );
}

export default function Header() {
  const { firebaseApp } = useFirebase();
  const { user, isLogin, isInitialized } = useAuth();

  const onClickLogout = (): void => {
    if (!firebaseApp) {
      console.error('Failed to logout (not initialized Firebase)');
      return;
    }
    firebaseApp.auth().signOut().then(() => console.info('Successfully logout')).catch((e) => console.error('Failed to logout: ', e));
  }

  console.log('user: ', user);

  return (
    <AppBar position="fixed" className={styles.bg}>
      <Toolbar>
        <div  className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.rightBlock}>
          {
            isLogin && <div className={styles.label}>{user?.displayName}</div>
          }
          <LoginUser
            isInitialized={isInitialized}
            isLogin={isLogin}
            user={user}
            onClickLogout={onClickLogout}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}