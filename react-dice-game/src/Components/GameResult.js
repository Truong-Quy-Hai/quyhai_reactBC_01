import React, { Component } from 'react'

export default class GameResult extends Component {
  render() {
    return (
      <div className="container text-center">
        <div className="display-4">
          You choose : <span className="text-success">TÀI</span>
        </div>
        <div className="display-4">
          Wins : <span className="text-success">5</span>
        </div>
        <div className="display-4">
          Games : <span className="text-success">10</span>
        </div>
      </div>
    )
  }
}

// import React from 'react'

// export default function GameResult() {
//   return (
//     <div>

//     </div>
//   )
// }
