import { AppBar, Button, Toolbar, Link } from "@material-ui/core";
import styles from '../styles/Header.module.scss';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user } = useAuth();
  const isLogin = !!user?.displayName;

  console.log('user: ', user);

  return (
    <AppBar position="fixed" className={styles.bg}>
      <Toolbar>
        <div  className={styles.logo}>
          <img src="/assets/img/header-logo.png" alt="NFT-artfolio logo"></img>
        </div>
        <div className={styles.rightBlock}>
          {
            isLogin
              ? `${user.displayName}`
              : <Link color="inherit" className={styles.link} href="/" >LOGIN</Link>
          }
        </div>
      </Toolbar>
    </AppBar>
  );
}