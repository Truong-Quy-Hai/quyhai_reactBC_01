import { CHOICES } from "../../constants/choices";
import { PLAYER_DECIDE, PLAYER_PLAY } from "../actions";
const { ROCK, PAPER, SCISSORS } = CHOICES;

const initialState = {
  player: "", // rock paper scissors
  computer: "", // rock paper scissors
  winner: "",
  win: 0, //player win
  total: 0, // total games
};

function rand() {
  return Math.floor(Math.random() * 3) + 1;
}

function whoWin(player, computer) {
  switch (computer) {
    case ROCK:
      if (player === PAPER) return 1;
      else if (player === SCISSORS) return -1;
      return 0;

    case PAPER:
      if (player === SCISSORS) return 1;
      else if (player === ROCK) return -1;
      return 0;
    case SCISSORS:
      if (player === ROCK) return 1;
      else if (player === PAPER) return -1;
      return 0;
  }
  return 0;
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_DECIDE:
      return { ...state, player: action.payload };
    case PLAYER_PLAY: {
      if (!state.player) return { ...state };
      let computer = rand();
      switch (whoWin(state.player, computer)) {
        case 1:
          return {
            ...state,
            winner: "player",
            total: state.total + 1,
            win: state.win + 1,
            computer,
          };
        case 0:
          return {
            ...state,
            winner: "tie",
            total: state.total + 1,
            computer,
          };
        case -1:
          return {
            ...state,
            winner: "computer",
            total: state.total + 1,
            computer,
          };
      }
    }
    default:
      return state;
  }
};

export default gameReducer;
