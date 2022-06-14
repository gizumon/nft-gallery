import styles from '../styles/Door.module.scss';
import { useState } from 'react';

interface Props {
  label?: string;
  onOpen: () => void;
}

const timeout = 2000;

export const Door: React.FC<Props> = ({ label, onOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();
  const clickHandler = () => {
    // clear timer
    timer && clearTimeout(timer);
    if (!isOpen) {
      setTimer(setTimeout(onOpen, timeout));
    }
    setIsOpen((pre) => !pre);
  }

  return (
    <div className={styles.doorWrapper} onClick={clickHandler} >
      <div className={isOpen ? `${styles.lable} ${styles.hide}` : styles.label}>{label}</div>
      <img src="/assets/img/door_only.png" className={isOpen ? `${styles.door} ${styles.open}` : `${styles.door}`}/>
      <img src="/assets/img/door_open.png" className={styles.doorBack}/>
    </div>
  );
}