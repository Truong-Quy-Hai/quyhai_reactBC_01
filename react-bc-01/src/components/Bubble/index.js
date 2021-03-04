import getImg from '../imageRoutes'
import styles from './bubble.module.css'


const Bubble = ({player}) => {
  return (
    <div className={styles.speechBubble}>
      {player && <img src={getImg(player)} />}
    </div>
  )
}

export default Bubble
