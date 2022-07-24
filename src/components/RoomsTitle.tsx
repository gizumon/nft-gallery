import styles from '../styles/RoomsTitle.module.scss'

interface Props {
  title: string;
}

const RoomsTitle = ({ title }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        {title}
      </div>
    </div>
  )
}

export default RoomsTitle