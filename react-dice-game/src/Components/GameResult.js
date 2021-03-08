import React, { Component } from "react";
import { connect } from "react-redux";

const genDices = () => {
  const mangXucXac = []
  for (let i = 0; i < 3; i++) {
    const diem = Math.floor(Math.random() * 6) + 1;
    mangXucXac.push({diem, hinhAnh: `./images/${diem}.png`})
  }
  return mangXucXac;
};

class GameResult extends Component {
  render() {
    const { choiGame } = this.props;
    const { banChon, soBanThang, tongSoBanChoi } = this.props.gameState;
    return (
      <div className="container text-center">
        <div className="display-4">
          Bạn chọn : <span className="text-success">{banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div className="display-4">
          Số bàn chơi : <span className="text-success">{tongSoBanChoi}</span>
        </div>

        <div>
          <button className="btn btn-success p-4">
            <span className="w-25 display-4" onClick={choiGame}>
              Play Game
            </span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    choiGame: () => {
      const mangXucXac = genDices();
      dispatch({
        type: "game/play",
        payload: mangXucXac,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameResult);

// import React from 'react'

// export default function GameResult() {
//   return (
//     <div>

//     </div>
//   )
// }
