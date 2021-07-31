"use strict"
import React from 'react';
import Cell from "./Cell";
import '../style/board.scss'
import useStorage from "../hooks/useStorage";

const initialGrid = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2]
]

function Board({}) {
  const [grid, setGrid] = useStorage("grid", initialGrid)
  return (
    <div className={"board"}>
      {
        grid.map((row, i) => {
          return <React.Fragment key={i}>
            {
              row.map((cell, j) => {
                return <Cell key={j} index={cell}/>
              })
            }
          </React.Fragment>
        })
      }
    </div>
  );
}

export default Board;
