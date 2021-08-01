"use strict"
import React from 'react';
import '../style/board.scss'
import useStorage from "../hooks/useStorage";
import {shiftDown, shiftLeft, shiftRight, shiftUp} from "../methods/tileMerging";
import addTile from "../methods/addTile"
import copyArray from "../methods/copyArray";
import isSameArray from "../methods/isSameArray";

const initialGrid = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2]
]

let setGridFunc = null;
let currentGrid = null;

// move animation and merge animation
const animateTiles = (prevGrid, currentGrid) => {
  // call animation
  console.log("animatetiles");
  console.table(prevGrid);
}

// tile add animation
const animateTileAddition = (prevGrid, currentGrid) => {
  // call animation
  console.log("animatetileadd");
  console.table(prevGrid);
}

document.body.addEventListener("keydown", (event) => {
  if (!setGridFunc)
    return;
  if(!currentGrid)
    return
  const gridCopy = copyArray(currentGrid)
  switch (event.key) {
    case "ArrowUp":
      shiftUp(gridCopy)
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowDown":
      shiftDown(gridCopy)
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowLeft":
      shiftLeft(gridCopy)
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowRight":
      shiftRight(gridCopy)
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
  }
})

function Board() {
  const [grid, setGrid] = useStorage("grid", initialGrid)
  setGridFunc = setGrid
  currentGrid = grid
  return (
    <div className={'board-outer'}>
      <div className={"board"}>
        {
          grid.map((row, i) => {
            return <React.Fragment key={i}>
              {
                row.map((cell, j) => {
                  return <div key={j} className={"cell"}>{cell===0 ? "" : cell}</div>
                })
              }
            </React.Fragment>
          })
        }
      </div>
    </div>
  );
}

export default Board;
