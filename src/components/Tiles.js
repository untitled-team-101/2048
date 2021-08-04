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
                } data-i={i} data-j={j} data-len={cell.toString().length} key={keyGen.next().value}>
                  {cell}
                  <div className='box front'/>
                  <div className='box back'/>
                  <div className='box left'/>
                  <div className='box right'/>

                </div>:""
              })
            }
          </React.Fragment>
        })
      }
    </>
  );
}

export default Tiles;
