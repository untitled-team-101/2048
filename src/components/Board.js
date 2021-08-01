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

let setScoreFunc = null;
let currentScore = null;

let currentHighScore = null;
let setHighScoreFunc = null;

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
    const [grid, setGrid] = useStorage("grid", initialGrid)
    const [score, setScore] = useStorage("score", 0);
    let [highScore, setHighScore] = useStorage("highScore", 0);

    setScoreFunc = setScore;
    currentScore = score;

    setHighScoreFunc = setHighScore;
    currentHighScore = highScore;

    setGridFunc = setGrid
    currentGrid = grid;

    return (
        <div className={'board-outer'}>
            <div className={"board"}>
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
                    setGrid(initialGrid);
                    setScore(0);
                }} className={'resetBtn'}>Reset
                </button>
            </div>
        </div>
    );
}

export default Board;
