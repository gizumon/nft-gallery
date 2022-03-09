import styled from 'styled-components';
import { Grid, Typography, Box } from '@material-ui/core';
import Header from '../components/Header';
import BannerArt from '../components/BannerArt';
import { OrbitControls } from '@react-three/drei';
import { COLORS } from '../utils/constants';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
  backgroundColor: COLORS.charcoal,
});

// const Container = styled.div({
//   position: 'relative',
//   display: flex,
// });


export default function Top() {
  const panSpeed = 50;
  return (
    <Container>
      <Header />
      {/* <OrbitControls panSpeed={panSpeed} /> */}
      <Box sx={{position: 'fixed', zIndex: 1000}} >
        <Grid lg={2} sm={2} spacing={10} />
        <Grid lg={8} sm={8} spacing={10}>
          {/* <h1>NFT artfolio</h1> */}
        </Grid>
      </Box>
      <BannerArt />
    </Container>
  );
}
