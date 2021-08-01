"use strict"
import React from 'react';
import '../style/board.scss'
import useStorage from "../hooks/useStorage";
import {shiftDown, shiftLeft, shiftRight, shiftUp} from "../methods/tileMerging";
import addTile from "../methods/addTile"

const initialGrid = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2]
]

let setGridFunc = null;
let currentGrid = null;

document.body.addEventListener("keydown", (event)=>{
  if(!setGridFunc)
    return;
  if(!currentGrid)
    return
  switch(event.key){
    case "ArrowUp":
      shiftUp(currentGrid)
      addTile(currentGrid);
      setGridFunc([...currentGrid])
      break;
    case "ArrowDown":
      shiftDown(currentGrid)
      addTile(currentGrid);
      setGridFunc([...currentGrid])
      break;
    case "ArrowLeft":
      shiftLeft(currentGrid)
      addTile(currentGrid);
      setGridFunc([...currentGrid])
      break;
    case "ArrowRight":
      shiftRight(currentGrid)
      addTile(currentGrid);
      setGridFunc([...currentGrid])
      break;
  }
})

function Board() {
  const [grid, setGrid] = useStorage("grid", initialGrid)
  setGridFunc = setGrid
  currentGrid = grid
  return (
    <div className={"board"}>
      {
        grid.map((row, i) => {
          return <React.Fragment key={i}>
            {
              row.map((cell, j) => {
                return <div key={j} className={"cell"}>{cell}</div>
              })
            }
          </React.Fragment>
        })
      }
    </div>
  );
}

export default Board;
