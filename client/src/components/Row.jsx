import React from 'react';
import Square from './Square.jsx';

const Row = ({row}) => (
  <div>
    {row.map((square) => <Square square={square}/>)}
  </div>
)

export default Row;