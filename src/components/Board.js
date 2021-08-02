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
import Tiles from "./Tiles";

let setGridFunc = null;
let currentGrid = null;

let setScoreFunc = null;
let currentScore = null;

let currentHighScore = null;
let setHighScoreFunc = null;

const animationDelay = 500; // ms

const animateTiles = ({moves, merges}) => {
  const tiles = {}
  for (let move of moves) {
    const {from, to} = move
    let tile;
    if (tiles[`${from.x}_${from.y}`]) {
      tile = tiles[`${from.x}_${from.y}`]
      tiles[`${from.x}_${from.y}`] = undefined
    } else
      tile = document.querySelector(`[data-i='${from.x}'][data-j='${from.y}']`)
    tile?.style?.setProperty('--i', to.x);
    tile?.style?.setProperty('--j', to.y);
    tiles[`${to.x}_${to.y}`] = tile
  }

  const mergeTiles = {};
  for (let merge of merges) {
    const {from, to} = merge;
    let tile;
    if (mergeTiles[`${from.x}_${from.y}`]) {
      tile = mergeTiles[`${from.x}_${from.y}`]
      mergeTiles[`${from.x}_${from.y}`] = undefined
    } else
      tile = document.querySelector(`[data-i='${from.x}'][data-j='${from.y}']`)
    tile?.style?.setProperty('--i', to.x);
    tile?.style?.setProperty('--j', to.y);
    mergeTiles[`${to.x}_${to.y}`] = tile
  }
}

// tile add animation
const animateTileAddition = ({x, y}) => {
  console.log(x, y)
  // call animation
  // TODO: add add animation
  // console.log("animate tile add");
  // console.table(prevGrid);
}

let isChanging = false;
const changeTiles = (changeFunction) => {
  if (!setGridFunc)
    return
  if (!currentGrid)
    return
  if (isChanging)
    return
  isChanging = true
  const gridCopy = copyArray(currentGrid)
  let scoreCopy
  const changes = changeFunction(gridCopy, currentScore)
  scoreCopy = changes.score
  if (isSameArray(currentGrid, gridCopy)) {
    isChanging = false
    return
  }
  animateTiles(changes)
  animateTileAddition(addTile(gridCopy))
  setTimeout(() => {
    try {
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy)
      if (scoreCopy > currentHighScore)
        setHighScoreFunc(scoreCopy)
      if (isGameOver(gridCopy))
        setTimeout(()=>alert("Game Over!"), 1)
    } catch (e) {
    }
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
  const [gridSize, setGridSize] = useStorage('grid-size', 4);
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
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(3);*/}
      {/*  setGridFunc(createGrid(3))*/}
      {/*  setScore(0);*/}
      {/*}}>3*/}
      {/*</button>*/}
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(4);*/}
      {/*  setGridFunc(createGrid(4))*/}
      {/*  setScore(0);*/}
      {/*}}>4*/}
      {/*</button>*/}
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(5);*/}
      {/*  setGridFunc(createGrid(5))*/}
      {/*  setScore(0);*/}
      {/*}}>5*/}
      {/*</button>*/}
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(6);*/}
      {/*  setGridFunc(createGrid(6))*/}
      {/*  setScore(0);*/}
      {/*}}>6*/}
      {/*</button>*/}
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(7);*/}
      {/*  setGridFunc(createGrid(7))*/}
      {/*  setScore(0);*/}
      {/*}}>7*/}
      {/*</button>*/}
      {/*<button onClick={(e) => {*/}
      {/*  setGridSize(8);*/}
      {/*  setGridFunc(createGrid(8))*/}
      {/*  setScore(0);*/}
      {/*}}>8*/}
      {/*</button>*/}

      <div className={"board"}
           style={{gridTemplate: `repeat(${gridSize}, ${100 / gridSize}%)/repeat(${gridSize}, ${100 / gridSize}%)`}}>
        {
          grid.map((row, i) => {
            return <React.Fragment key={i}>
              {
                row.map((cell, j) => {
                  return <div key={j} className={"cell"}/>
                })
              }
            </React.Fragment>
          })
        }
        <Tiles grid={grid} gridSize={gridSize}/>
        <div className='front-but-back'>
          front but back
        {/*  TODO:apply this*/}
        </div>
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