import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../redux/actionCreators";
import { PLAYER_PLAY } from "../../redux/actions";
import Character from "../Characters";

import styles from "./App.module.css";

const textBoxStyle = {
  width: 400,
  position: "relative",
  textAlign: "center",
  margin: "0 auto",
};

const buttonStyle = {
  fontSize: 36,
  border: "2px solid #fff",
  outline: "none",
  padding: "16px 32px",
  background: "none",
  color: "#fff",
  transition: "0.5s",
};

let buttonHover = { ...buttonStyle, background: "#fff", color: "#000" };

const App = () => {
  let [isMouseIn, setMouseIn] = useState(false);
  const win = useSelector(state => state.gameReducer.win)
  const total = useSelector(state => state.gameReducer.total)
  const dispatch = useDispatch()

  return (
    <div className={styles.App}>
      <Character style={{ top: 40, left: 80 }} charImg="./images/player.png" />
      <Character
        style={{ top: 40, right: 80 }}
        charImg="./images/playerComputer.png"
      />

      <div style={textBoxStyle}>
        <h1 className={`${styles.gameHeading} ${styles.gameHeadingOrange}`}>
          I'm iron man, i love you 3000 !!
        </h1>
        <h1 className={styles.gameHeading}>
          Số bàn thắng: <span className={styles.gameHeadingOrange}>{win}</span>
        </h1>
        <h1 className={styles.gameHeading}>
          Số bàn chơi: <span className={styles.gameHeadingOrange}>{total}</span>
        </h1>

        <button
          style={isMouseIn ? buttonHover : buttonStyle}
          onMouseEnter={() => setMouseIn(!isMouseIn)}
          onMouseOut={() => setMouseIn(!isMouseIn)}
          onClick={() => dispatch(createAction(PLAYER_PLAY))}
        >
          PLAY GAME
        </button>
      </div>
    </div>
  );
};

export default App;
