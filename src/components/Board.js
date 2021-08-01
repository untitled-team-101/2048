"use strict"
import React from 'react';
import '../style/board.scss'
import useStorage from "../hooks/useStorage";
import {shiftDown, shiftLeft, shiftRight, shiftUp} from "../methods/tileMerging";
import addTile from "../methods/addTile"
import copyArray from "../methods/copyArray";
import isSameArray from "../methods/isSameArray";
import isGameOver from '../methods/gameOver';
import {useState} from "react";

let initialGrid = {
  2: [[2, 2], [2, 2]],
  3: [[2, 2, 2], [2, 2, 2], [2, 2, 2]],
  4: [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]],
  5: [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]
}

let setGridFunc = null;
let currentGrid = null;

let setScoreFunc = null;
let currentScore = null;

let currentHighScore = null;
let setHighScoreFunc = null;

let setGridSizeFunc = null;
let currGridSize = null;

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
  if (!currentGrid)
    return
  const gridCopy = copyArray(currentGrid)
  let scoreCopy = currentScore;
  switch (event.key) {
    case "ArrowUp":
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      scoreCopy = shiftUp(gridCopy, currentScore)
      if (isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy);
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)
      break;
    case "ArrowDown":
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      scoreCopy = shiftDown(gridCopy, currentScore)
      if (isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy);
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)
      break;
    case "ArrowLeft":
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      scoreCopy = shiftLeft(gridCopy, currentScore)
      if (isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy);
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)
      break;
    case "ArrowRight":
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      scoreCopy = shiftRight(gridCopy, currentScore)
      if (isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)

      setScoreFunc(scoreCopy);
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)

      break;
  }
})

function Board() {
  const newArray = copyArray(initialGrid[currGridSize]);
  // setGridFunc(newArray);

  const [gridSize, setGridSize] = useStorage('grid-size', 3);
  setGridSizeFunc = setGridSize
  currGridSize = gridSize

  const [grid, setGrid] = useStorage("grid", newArray)
  setGridFunc = setGrid
  currentGrid = grid

  const [highScore, setHighScore] = useStorage("highScore", 0);
  const [score, setScore] = useStorage("score", 0);
  setScoreFunc = setScore;
  currentScore = score;
  setHighScoreFunc = setHighScore;
  currentHighScore = highScore;

  return (
    <div className={'board-outer'}>
      <button onClick={(e) => {
        setGridSize(2);
        console.log(gridSize);
        const newArray = copyArray(initialGrid[2]);
        setGridFunc(newArray)
        console.log(gridSize);
      }}>2
      </button>
      <button onClick={(e) => {
        setGridSize(3);
        const newArray = copyArray(initialGrid[3]);
        console.log(gridSize);
        setGridFunc(newArray)
      }}>3
      </button>
      <button onClick={(e) => {
        setGridSize(4)
        const newArray = copyArray(initialGrid[4])
        setGridFunc(newArray)
      }}>4
      </button>
      <button onClick={(e) => {
        setGridSize(5);
        setGridFunc(initialGrid[5])
      }}>5
      </button>
      <button onClick={(e) => {
        setGridSize(6);
        const newGrid = [...Array(6)].map(x => Array(6).fill(2));
        setGridFunc(newGrid)
      }}>6
      </button>
      <button onClick={(e) => {
        setGridSize(7);
        const newGrid = [...Array(7)].map(x => Array(7).fill(2));
        setGridFunc(newGrid)
      }}>7
      </button>
      <button onClick={(e) => {
        setGridSize(8);
        const newGrid = [...Array(8)].map(x => Array(8).fill(2));
        setGridFunc(newGrid)
      }}>8
      </button>

      <div className={"board"}
           style={{gridTemplate: `repeat(${gridSize}, ${100 / gridSize}%)/repeat(${gridSize}, ${100 / gridSize}%)`}}>
        {
          grid.map((row, i) => {
            return <React.Fragment key={i}>
              {
                row.map((cell, j) => {
                  return <div key={j} className={"cell"}>{cell === 0 ? "" : cell}</div>
                })
              }
            </React.Fragment>
          })
        }
      </div>

      <div className={'sideBar'}>
        <div className={'scoreBoard'}>
          <div id={'score'}>
            <div>
              Score
            </div>
            <div>
              {score}
            </div>
          </div>
          <div id={'highScore'}>
            <div>
              HighScore
            </div>
            <div>
              {highScore}
            </div>
          </div>
        </div>
        <button onClick={() => {
          setScore(0);
          const newArray = copyArray(initialGrid[gridSize]);
          setGrid(newArray);
        }} className={'resetBtn'}>Reset
        </button>
      </div>
    </div>
  );
}

export default Board;