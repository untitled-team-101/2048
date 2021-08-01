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

            break;
    }
})

function Board() {
    const [grid, setGrid] = useStorage("grid", initialGrid)
    const [score, setScore] = useStorage("score", 0);
    // const [highScore, setHighScore] = useStorage("highScore", 0);

    setScoreFunc = setScore;
    currentScore = score;

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
            <div>
                <div>
                    <div>{score}</div>
                    <div>{highScore}</div>
                    <button onClick={() => {
                        setGrid(initialGrid);
                        setScore(0);
                    }}>Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Board;
