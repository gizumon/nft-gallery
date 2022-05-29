import styled from 'styled-components';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import BannerArt from '../components/BannerArt';
import { OrbitControls } from '@react-three/drei';
import styles from '../styles/Top.module.scss';
import FirebaseLoginUI from '../components/FirebaseLoginUI';

const Container: React.FC = ({children}) => (
  <div id={styles.top}>
    {children}
  </div>
);

// const Container = styled.div({
//   position: 'relative',
//   display: flex,
// });

export default function Top() {
  const panSpeed = 50;
  return (
    <Container>
      {/* <OrbitControls panSpeed={panSpeed} /> */}
      {/* <Box sx={{position: 'fixed', display: 'flex', flexDirection: 'row', justifyContent: 'center',width: '100vw', zIndex: 1000, marginTop: '64px', pointerEvents: 'none'}} > */}
      <Box className={styles.box} >
        <Grid item lg={3} sm={3} />
        <Grid item lg={6} sm={6}>
          <div className={styles.titleBlock} >
            <img className={styles.titleLogo} src={"/assets/img/title-logo.png"}/>
          </div>
        </Grid>
        <Grid item lg={3} sm={3} />
        <Grid item lg={12} sm={12}>
          <div className={styles.btnBlocks} >
            <FirebaseLoginUI />
          </div>
        </Grid>
      </Box>
      <BannerArt />
    </Container>
  );
}
