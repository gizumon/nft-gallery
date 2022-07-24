import * as THREE from 'three';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSprings, animated, WithAnimated } from '@react-spring/three';
import { useDrag } from '@use-gesture/react';
import { Container } from '@mui/material';

import { COLORS } from '../../utils/constants';

const number = 35;
const colors = [
  // COLORS.yellow_sunshine,
  // COLORS.blue_steel,
  COLORS.shokot_blue,
  COLORS.charcoal,
  COLORS.cloudy,
  COLORS.sand_dollar,
  COLORS.lemon,
  // COLORS.salmon,
]
const random = (i) => {
  const r = Math.random()
  return {
    position: [250 - Math.random() * 500, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.Math.degToRad(Math.round(Math.random()) * 45)],
  }
}

const data = new Array(number).fill(0).map(() => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  }
})

function Content() {
  // const [bindIndex, setBindIndex] = useState<number>(null);
  const [springs, set] = useSprings(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 80 }
  }))
  // const bind = useDrag(({
  //   down,
  //   args: [originalIndex],
  //   movement: [mx, my],
  // }) => {
  //   set.start((i) => {
  //     if (i !== originalIndex) return;
  //     console.log('change pos', originalIndex, i, mx, my, down);
  //     return {
  //       ...springs[i],
  //       x: mx,
  //       y: my,
  //       immediate: down,
  //     }
  //   })
  // })
  useEffect(() => void setInterval(() => set((i) => ({ ...random(i), delay: i * 40 })), 3000), [])
  return data.map((d, index) => (
    <animated.mesh key={index} {...springs[index]} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={d.args} />
      <animated.meshStandardMaterial attach="material" color={springs[index].color} roughness={0.75} metalness={0.5} />
    </animated.mesh>
  ))
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

export default function BannerArt({ top = '0px', opacity = '100%', zIndex = '-1' }) {
  // const panSpeed = 50;
  return (
    <div style={{position: 'fixed', width: '100vw', height: '100vh', top, opacity, zIndex}}>
      {/* <div style={{position: 'absolute', width: '100%', height: '100%', top}}> */}
        <Canvas
          linear
          flat
          shadows
          camera={{ position: [0, 0, 70], fov: 500 }}
        >
          {/* <OrbitControls panSpeed={panSpeed} /> */}
          <Lights />
          <Content />
        </Canvas>
      {/* </div> */}
    </div>
  )
}
