import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { OrbitControls } from '@react-three/drei';
import Header from '../components/Layouts/Header';
import BannerArt from '../components/3Ds/BannerArt';
import FirebaseLoginUI from '../components/FirebaseLoginUI';
import styles from '../styles/Top.module.scss';
import { useAuth } from '../hooks/useAuth';
import useEffect from 'react';
import { Door } from '../components/Door';
import { useNavigate } from 'react-router-dom';

const Container: React.FC = ({children}) => (
  <div id={styles.top}>
    {children}
  </div>
);

export default function Top() {
  const timeout = 3000;
  const navigate = useNavigate();
  const onClick = () => navigate('/rooms');
  

  return (
    <Container>
      <BannerArt
        top='64px'
        opacity='1'
      />
      <div className={styles.box} >
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className={styles.titleBlock} >
            <img className={styles.titleLogo} src={"/assets/img/title-logo.png"}/>
          </div>
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={12} className={styles.btnArea} >
          {/* <Door label="Rooms" onOpen={onOpen} /> */}
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            startIcon={<AccountBalanceIcon />}
            onClick={onClick}
          >
            See NFT artfolio list
          </Button>
        </Grid>
      </div>
    </Container>
  );
}
