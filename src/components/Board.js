import {SwipeEventListener} from 'swipe-event-listener';
import {Link, Redirect} from 'react-router-dom';
import React, {useEffect} from 'react';
import '../style/board.scss'
import useStorage from "../hooks/useStorage";
import {shiftDown, shiftLeft, shiftRight, shiftUp} from "../methods/tileMerging";
import addTile from "../methods/addTile"
import copyArray from "../methods/copyArray";
import isSameArray from "../methods/isSameArray";
import isGameOver from '../methods/gameOver';
import createGrid from '../methods/createGrid';
import Tiles from "./Tiles";
import GameLevel from './GameLevel';
import isGameOwn from '../methods/gameWin';

let currentGridSize = 4;
let setGridFunc = null;
let currentGrid = null;
let gameOverFunc = null
let isGameRunning = false;

let setScoreFunc = null;
let currentScore = null;

let currentHighScores = null;
let setHighScoresFunc = null;

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

let showTiltAnimation = (dir) => {
  let className = `${dir}-animation`;
  let board = document.querySelector(".board")
  board?.classList.add(className)
  setTimeout(() => {
    board?.classList?.remove(className);
  }, animationDelay * 11 / 10)
}

let isChanging = false;
const changeTiles = (changeFunction, moveDir) => {
  if (!isGameRunning)
    return
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
  showTiltAnimation(moveDir)
  setTimeout(() => {
    try {
      setGridFunc(gridCopy)
      setScoreFunc(scoreCopy)
      if (scoreCopy > currentHighScores[currentGridSize]) {
        currentHighScores[currentGridSize] = scoreCopy
        setHighScoresFunc({...currentHighScores})
      }
      if (isGameOwn(gridCopy, currentGridSize)) {
        // TODO: Add on game win activity
      } else if (isGameOver(gridCopy)) {
        setTimeout(() => {
          if (gameOverFunc)
            gameOverFunc()
        }, 1000)
      }
    } catch (e) {}
    isChanging = false
  }, animationDelay * 11 / 10)
}

document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
    case "w":
    case "W":
      changeTiles(shiftUp, "top")
      break;
    case "ArrowDown":
    case "s":
    case "S":
      changeTiles(shiftDown, "bottom")
      break;
    case "ArrowLeft":
    case "a":
    case "A":
      changeTiles(shiftLeft, "left")
      break;
    case "ArrowRight":
    case "D":
    case "d":
      changeTiles(shiftRight, "right")
      break;
  }
  return true
})

const {swipeArea} = SwipeEventListener({
  swipeArea: document.querySelector('body'),
});

swipeArea.addEventListener('swipeDown', () => {
  changeTiles(shiftDown, "bottom")
});
swipeArea.addEventListener('swipeUp', () => {
  changeTiles(shiftUp, "top")
});

swipeArea.addEventListener('swipeLeft', () => {
  changeTiles(shiftLeft, "left")
});

swipeArea.addEventListener('swipeRight', () => {
  changeTiles(shiftRight, "right")
});


function Board() {
  const [gridSize, setGridSize] = useStorage('p-grid-size', 3);
  const [grid, setGrid] = useStorage("p-grid", copyArray(createGrid(gridSize)));
  const [highScores, setHighScores] = useStorage("p-highScore", {
    3: 0,
    4: 0,
    5: 0
  });
  const [score, setScore] = useStorage("p-score", 0);
  const [isGamePlaying, setIsGamePlaying] = useStorage("p-is-playing", false)
  const [isGameOut, setIsGameOut] = useStorage("p-isGameOut", false)

  console.log(grid)
  setGridFunc = setGrid
  currentGrid = grid
  currentGridSize = gridSize
  setScoreFunc = setScore;
  currentScore = score;
  setHighScoresFunc = setHighScores;
  currentHighScores = highScores;
  isGameRunning = isGamePlaying

  const resetGame = () => {
    setGrid(createGrid(gridSize))
    setScore(0)
    setIsGamePlaying(false)
  }

  gameOverFunc = () => {
    localStorage.setItem("p-score", "0");
    setIsGameOut(true)
    setIsGamePlaying(false)
    setGrid(createGrid(gridSize))
    setScore(0)
  }


  useEffect(() => {
    if (isGamePlaying === false) {
      localStorage.removeItem("p-isGameOut")
      setIsGameOut(false)
    }
  })
  const setGameMode = (n) => {
    setIsGamePlaying(true)
    setGridSize(n)
    setGrid(createGrid(n))
  }

  return (
    <div className={'board-outer'}>
      <div data-grids={gridSize} className={`board ${isGamePlaying ? "" : "rotated"}`} style={
        {gridTemplate: `repeat(${gridSize}, ${100 / gridSize}%)/repeat(${gridSize}, ${100 / gridSize}%)`}}> {
        grid.map((row, i) => {
          return <React.Fragment key={i}> {
            row.map((cell, j) => {
              return <div key={j} className={"cell"}/>
            })
          } </React.Fragment>
        })
      }
        <Tiles grid={grid} gridSize={gridSize}/>
        <div className='front-but-back'>
          <GameLevel setGameMode={setGameMode}/>
        </div>
      </div>

      {
        isGamePlaying ?
          <>
            <div id={'score'} className={'score'}>
              <div>
                Score
              </div>
              <div>
                {score}
              </div>
            </div>
            <div id={'highScore'} className={'highScore'}>
              <div>
                High Score
              </div>
              <div> {highScores[gridSize]} </div>
            </div>
            <button onClick={resetGame} className={'resetBtn'}> Reset</button>
          </> : <div className={'highScore'}>
            <div>
              Choose Level
            </div>
          </div>
      }
      {
        (isGameOut && !isGamePlaying) ? <Redirect to={"/gameOver"}/> : null
      }
    </div>
  );
}

export default Board;