import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Header from '../components/Header';
import BannerArt from '../components/BannerArt';
import { OrbitControls } from '@react-three/drei';

const Container = styled.div({
  width: '100vw',
  height: '100vh',
});

export default function Top() {
  const panSpeed = 50;
  return (
    <Container>
      <Header />
      {/* <OrbitControls panSpeed={panSpeed} /> */}
      <BannerArt />
      {/* <Grid sm={2}/>
      <Grid lg={8} sm={8} spacing={10}>
        コンテンツ
      </Grid> */}
    </Container>
  );
}
