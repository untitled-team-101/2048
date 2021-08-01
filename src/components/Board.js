"use strict"
import React from 'react';
import '../style/board.scss'
import useStorage from "../hooks/useStorage";
import {shiftDown, shiftLeft, shiftRight, shiftUp} from "../methods/tileMerging";
import addTile from "../methods/addTile"
import copyArray from "../methods/copyArray";
import isSameArray from "../methods/isSameArray";
import isGameOver from '../methods/gameOver';
import createGrid from '../methods/createGrid';

let setGridFunc = null;
let currentGrid = null;

let setScoreFunc = null;
let currentScore = null;

let currentHighScore = null;
let setHighScoreFunc = null;

const animationDelay = 500; // ms
// move animation and merge animation
const animateTiles = (prevGrid, currentGrid) => {
  // call animation
  // console.log("animate tiles");
  // console.table(prevGrid);
}

// tile add animation
const animateTileAddition = (prevGrid) => {
  // call animation
  // console.log("animate tile add");
  // console.table(prevGrid);
}

let isChanging = false;
const changeTiles = (changeFunction) => {
  if (!setGridFunc)
    return
  if (!currentGrid)
    return
  if(isChanging){
    console.log("return")
    return
  }
  isChanging = true
  const gridCopy = copyArray(currentGrid)
  let scoreCopy
  const changes = changeFunction(gridCopy, currentScore)
  scoreCopy = changes.score
  if (isSameArray(currentGrid, gridCopy)){
    isChanging = false
    return
  }
  animateTiles(changes)
  animateTileAddition(addTile(gridCopy))
  setTimeout(()=>{
    try{
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy)
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)
      if (isGameOver(gridCopy))
        alert("Game Over!")
    }catch(e){}
    isChanging = false;
  }, animationDelay)
}

document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      changeTiles(shiftUp)
      break;
    case "ArrowDown":
      changeTiles(shiftDown)
      break;
    case "ArrowLeft":
      changeTiles(shiftLeft)
      break;
    case "ArrowRight":
      changeTiles(shiftRight)
      break;
  }
})


function Board() {
  const [gridSize, setGridSize] = useStorage('grid-size', 3);
  const [grid, setGrid] = useStorage("grid", copyArray(createGrid(gridSize)));
  const [highScore, setHighScore] = useStorage("highScore" + gridSize, 0);
  const [score, setScore] = useStorage("score" + gridSize, 0);

  setGridFunc = setGrid
  currentGrid = grid
  setScoreFunc = setScore;
  currentScore = score;
  setHighScoreFunc = setHighScore;
  currentHighScore = highScore;

  return (
    <div className={'board-outer'}>
      <button onClick={(e) => {
        setGridSize(3);
        setGridFunc(createGrid(3))
        setScore(0);
      }}>3</button>
      <button onClick={(e) => {
        setGridSize(4);
        setGridFunc(createGrid(4))
        setScore(0);
      }}>4</button>
      <button onClick={(e) => {
        setGridSize(5);
        setGridFunc(createGrid(5))
        setScore(0);
      }}>5</button>
      <button onClick={(e) => {
        setGridSize(6);
        setGridFunc(createGrid(6))
        setScore(0);
      }}>6</button>
      <button onClick={(e) => {
        setGridSize(7);
        setGridFunc(createGrid(7))
        setScore(0);
      }}>7</button>
      <button onClick={(e) => {
        setGridSize(8);
        setGridFunc(createGrid(8))
        setScore(0);
      }}>8</button>

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
          setGrid(createGrid(gridSize));
        }} className={'resetBtn'}>Reset
        </button>
      </div>
    </div>
  );
}

export default Board;