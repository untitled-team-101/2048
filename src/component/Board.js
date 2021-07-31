"use strict"
import React from 'react';
import Cell from "./Cell";

import '../style/board.scss'

function Board({}) {
  return (
    <div className={"board"}>
      {
        [...Array(4*4)].map(
          (n, i)=>{
            return <Cell key={i} index={i}/>
          }
        )
      }
    </div>
  );
}

export default Board;