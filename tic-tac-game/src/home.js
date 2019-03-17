import React, { Component } from 'react';
import './index.css'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner : squares[a],
        line: lines[i]
      }
    }
  }
  return {winner:null, line:[]};
}

function Square(props) {
  if (props.highLight) {
    return (
      <button className="square" onClick={props.onClick} style={{color: "red"}}> 
        {props.value}
      </button>
    );
  }else {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
  }
}

class Board extends Component {
  renderSquare(i) {
      return (<Square value={this.props.squares[i]} 
                   onClick={() => this.props.onClick(i)}
                   highLight={this.props.winnerLine.includes(i)} 
            />)
  }

  render() {

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        move: {
          x: null,
          y: null
        },
      }],
      xIsNext: true,
      stepNumber: 0,
      order: false,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        move: {
          x: Math.floor(i / 3) + 1,
          y: Math.ceil(i % 3) + 1
        },
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  changeOreder() {
    this.setState({
      order: !this.state.order
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const winner = calculateWinner(current.squares).winner
    const winnerLine = calculateWinner(current.squares).line

    const reversHitory = history.slice().reverse()
    const arr = !this.state.order ? history : reversHitory
    const moves = arr.map((step, move) => {
      if (step.move.x === null) return;
      const desc ='Move (' + step.move.x +', '+ step.move.y +')'
      const highLight = move === this.state.stepNumber ? 'highLight' : null
      return (
        <li key={move}>
          <a href="#" className={highLight} onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner is ' + winner
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
            <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winnerLine={winnerLine}
            /> 
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div>
          <br/>
          <button onClick={this.changeOreder.bind(this)}>Sort</button>
        </div>
      </div>
    );
  }
}

// ========================================
export default Game;