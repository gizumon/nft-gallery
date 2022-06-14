import IconButton from '@mui/material/IconButton';
import styles from '../styles/ButtonWithBottomText.module.scss';

interface Props {
  iconEl: React.ReactNode;
  text: string;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

export const ButtonWithBottomText: React.FC<Props> = ({iconEl, text, onClick}) => {
  return (
      <div className={styles.root}>
        <IconButton aria-label="button-icon" className={styles.icon} onClick={onClick}>
          {iconEl}
        </IconButton>
        <div className={styles.text}>{text}</div>
      </div>
    )
}
