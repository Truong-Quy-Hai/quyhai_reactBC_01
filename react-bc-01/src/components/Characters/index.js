import { useSelector } from 'react-redux'
import Bubble from '../Bubble'
import DecisionBox from '../DecisionBox'
import styles from './character.module.css'

const Character = ({ style, charImg }) => {
  const isPlayer = charImg === "./images/player.png"
  const player = useSelector(state => state.gameReducer.player)
  const computer = useSelector(state => state.gameReducer.computer)

  return (
    <div className={styles.Character} style={style}>
      <Bubble player={isPlayer ? player : computer} />
      <img className={styles.CharacterImg} src={charImg} />
      {isPlayer && <DecisionBox />}
    </div>
  )
}

export default Character
