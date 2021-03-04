import { useState } from 'react';
import getImg from '../imageRoutes';

import {CHOICES} from '../../constants/choices'
import styles from './box.module.css'
import { useDispatch } from 'react-redux';
import { createAction } from '../../redux/actionCreators';
import { PLAYER_DECIDE, PLAYER_PLAY } from '../../redux/actions';

const {ROCK, PAPER, SCISSORS} = CHOICES
const styleIfActive = (x, id) => x === id ? ({
  border: "5px solid orange",
}) : ({
  border: "5px solid transparent"
});

const DecisionBox = () => {
  const [active, setActive] = useState(-1)
  const dispatch = useDispatch()

  const handleClick = (id) => {
    setActive(id)
    dispatch(createAction(PLAYER_DECIDE, id))
  }

  return (
    <div className={styles.decisionBox}>
      <div className={styles.box} style={styleIfActive(active, ROCK)} onClick={() => handleClick(ROCK)}>
        <img src={getImg(ROCK)} />
      </div>
      <div className={styles.box} style={styleIfActive(active, PAPER)} onClick={() => handleClick(PAPER)}>
        <img src={getImg(PAPER)} />
      </div>
      <div className={styles.box} style={styleIfActive(active, SCISSORS)} onClick={() => handleClick(SCISSORS)}>
        <img src={getImg(SCISSORS)} />
      </div>
    </div>
  )
}

export default DecisionBox
