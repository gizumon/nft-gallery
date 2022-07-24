import { SxProps, Theme } from '@mui/material/index';
import Grid from '@mui/material/Grid';

import { Room } from '../types/interfaces';
import RoomCard from './RoomCard';
import styles from '../styles/RoomCards.module.scss';
import { useState } from 'react';

interface Props {
  items: Room[]
  sx?: SxProps<Theme>
}

// スクロールの位置が中心に近い場合にz方向位置を100%
// スクロールの位置が中心に近い場合にz方向位置を100%

const RoomCards = ({items, sx}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'nowrap',
        width: '100%',
        overflowX: 'auto',
      }}
    >
      {
        items.map(item => (
            <RoomCard
              key={item.id}
              item={item}
            />
        ))
      }
    </div>
    // <Grid
    //   container
    //   direction="row"
    //   justifyContent="flex-start"
    //   alignItems="center"
    //   sx={{...sx}}
    //   className={styles.adjust}
    // >
    // </Grid>
  )
}

export default RoomCards