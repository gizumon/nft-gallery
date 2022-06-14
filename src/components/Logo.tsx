import { useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.scss';

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.logo} onClick={() => navigate('/')} >
      <img src="/assets/img/header-logo.png" alt="NFT-artfolio logo" />
    </div>
  );
}