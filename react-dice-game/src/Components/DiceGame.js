import React, { Component } from "react";
import Dice from "./Dice";
import GameResult from "./GameResult";

import "./DiceGame.css";
import { connect } from "react-redux";

class DiceGame extends Component {
  renderKetQua = () => {
    const diem = this.props.mangXucXac.reduce((acc, cur) => acc + cur.diem, 0);
    if (diem >= 12)
      return (
        <div className="text-center display-4 text-warning">{diem}:Tài</div>
      );
    return <div className="text-center display-4 text-warning">{diem}:Xỉu</div>;
  };
  render() {
    return (
      <div className="bgGame">
        <h1 style={{ fontSize: 75 }}>Bài tập game xúc xắc</h1>
        <Dice />

        {this.renderKetQua()}
        <GameResult />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.gameReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(DiceGame);
// import React from 'react'

// export default function DiceGame() {
//   return (
//     <div>

//     </div>
//   )
// }
