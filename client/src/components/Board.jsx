import React from 'react';
import Row from './Row.jsx';

const Board = ({board}) => (
  <div>I'm a board
    {board.map((row) => <Row row={row} />)}
  </div>
)

export default Board;