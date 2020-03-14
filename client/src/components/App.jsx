import React from 'react';
import axios from 'axios';
import Board from './Board.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: [],
      lastLocation: [],
      turn: 1,
      win: false,
    }
    //recall old state of board, or trigger new board
    this.buildBoardState = this.buildBoardState.bind(this);
    //build empty board
    this.makeNewBoard = this.makeNewBoard.bind(this);
    //populate board
    this.populateBoard = this.populateBoard.bind(this);
  }
  //populate top three rows with red on black.
  //populate bottom three rows with black on black.
  populateBoard(){
    //copy it to avoid mutation
    let board = this.state.board.slice();
    //for top row
    console.log('test',board)
    // console.log('test', board[0][0])
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 8; j++){
        if (board[i][j].color === "Black"){
          console.log('yes')
          board[i][j].piece = "Red"
        }
      }
    }
    //for bottom segment
    for (let i = 5; i < 8; i++){
      for (let j = 0; j < 8; j++){
        if (board[i][j].color === "Black"){
          board[i][j].piece = "Red";
        }
      }
    }
  }
  makeNewBoard(){
    let board = [];
    let current = 'R';
    let prev = "B"
    return new Promise((resolve, reject) =>{
      for(let i = 0; i < 8; i++){
        //add a row to our board
        board.push([]);
        if (current === 'B'){
          current = 'R';
        }
        else {
          current = 'B';
        }
        for (let j = 0; j < 8; j++){
          //add some spaces as objects.
          if (current === 'R'){
            board[i][j] = {"color":"Red", "piece": null}
          }
          if (current === 'B') {
            board[i][j] = {"color":"Black", "piece": null}
          }
          //update our current assignment
          if (current === 'B'){
            current = 'R';
          }
          else {
            current = 'B';
          }
        }
      }
      resolve(board);
    }).then((board) => {
      this.setState({
        board:board
      })
    })
    .then(() => {
      this.populateBoard()
    })


  }
  //update the state of the board if there is currently a game available
  buildBoardState(){
    axios.get('/api/board')
    .then((response) => {
      if (response = "none"){
        this.startNew();
      }
      else {
        this.setState({
          board: response
        })
      }
    })
  }

  //check weather a double jump is possible
  checkDoubleJump(){

  }

  checkCapture(){

  }

  makeKing(x,y){
    let board = this.state.board.slice();
    let currentPiece = board[x][y].piece;
    currentPiece += 'K';
  }
  //check weather the last move has hit either edge of the board
  checkKing(){
    if (this.state.lastMove){
      console.log('ok')
    }
  }
  //take into consideration side and orientation. can move
  move(){

  }
  componentDidMount(){
    this.makeNewBoard();
  }

  persistGame(){
    if (this.state.win){

    }
  }
  render(){
    let {board} = this.state;
    return (
      <div>I'm an app component
        <Board board={board}/>
      </div>
    )
  }
}