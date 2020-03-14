import React from 'react';

const Square = ({square}) => (
  <div style={{display : 'inline-block', height: "50px", width: "50px", backgroundColor: square.color}}>

    <div>
      {square.piece}
    </div>

  </div>
)

export default Square;