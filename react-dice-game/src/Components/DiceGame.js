import React, { Component } from 'react'
import Dice from './Dice'
import GameResult from './GameResult'

import './DiceGame.css'

export default class DiceGame extends Component {
  render() {
    return (
      <div className="bgGame">
        <h1 style={{fontSize: 75}}>Dice Game</h1>
        <Dice />

        <GameResult />
      </div>
    )
  }
}


// import React from 'react'

// export default function DiceGame() {
//   return (
//     <div>
      
//     </div>
//   )
// }
