import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { OrbitControls } from '@react-three/drei';
import Header from '../components/Header';
import BannerArt from '../components/BannerArt';
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
      {/* <OrbitControls panSpeed={panSpeed} /> */}
      {/* <Box sx={{position: 'fixed', display: 'flex', flexDirection: 'row', justifyContent: 'center',width: '100vw', zIndex: 1000, marginTop: '64px', pointerEvents: 'none'}} > */}
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
      <BannerArt />
    </Container>
  );
}
