import React from 'react';

import '../style/Tiles.scss'

const keyGen = (function* geyKey(){
  let i = 0;
  while (true){
    yield `key_${i++}`;
  }
})()

function Tiles({grid, gridSize}) {
  return (
    <>
      {
        grid.map((row, i)=>{
          return <React.Fragment key={keyGen.next().value}>
            {
              row.map((cell, j)=>{
                return cell?<div className='tile' style={
                  {
                    "--i": i,
                    "--j": j,
                    "--grid-size": gridSize
                  }
                } data-i={i} data-j={j} key={keyGen.next().value}>{cell}</div>:""
              })
            }
          </React.Fragment>
        })
      }
    </>
  );
}

export default Tiles;
