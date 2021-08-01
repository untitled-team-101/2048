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

let currentGridSize = 3;
let setGridSizeFunc = null;

let initialGrid = [...Array(currentGridSize)].map(x=>Array(currentGridSize).fill(2));

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
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowDown":
      shiftDown(gridCopy)
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowLeft":
      shiftLeft(gridCopy)
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
      if(isSameArray(currentGrid, gridCopy))
        return
      animateTiles(currentGrid, gridCopy)
      addTile(gridCopy)
      animateTileAddition(currentGrid, gridCopy)
      setGridFunc(gridCopy)
      break;
    case "ArrowRight":
      shiftRight(gridCopy)
      if (isGameOver(gridCopy)) {
        alert("Game Over!")
        return
      }
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
  const [gridSize, setGridSize] = useState(currentGridSize);
  setGridSizeFunc = setGridSize
  currentGridSize = gridSize
  return (
    <div className={'board-outer'}>
      <button onClick = {(e) => {
        setGridSizeFunc(2);
        const newGrid = [...Array(2)].map(x=>Array(2).fill(2));
        setGridFunc(newGrid)
      }} >2</button>
      <button onClick = {(e) => {
        setGridSizeFunc(3);
        const newGrid = [...Array(3)].map(x=>Array(3).fill(2));
        setGridFunc(newGrid)
      }} >3</button>
      <button onClick = {(e) => {
        setGridSizeFunc(4);
        const newGrid = [...Array(4)].map(x=>Array(4).fill(2));
        setGridFunc(newGrid)
      }} >4</button>
      <button onClick = {(e) => {
        setGridSizeFunc(5);
        const newGrid = [...Array(5)].map(x=>Array(5).fill(2));
        setGridFunc(newGrid)
      }} >5</button>
      <button onClick = {(e) => {
        setGridSizeFunc(6);
        const newGrid = [...Array(6)].map(x=>Array(6).fill(2));
        setGridFunc(newGrid)
      }} >6</button>
      <button onClick = {(e) => {
        setGridSizeFunc(7);
        const newGrid = [...Array(7)].map(x=>Array(7).fill(2));
        setGridFunc(newGrid)
      }} >7</button>
      <button onClick = {(e) => {
        setGridSizeFunc(8);
        const newGrid = [...Array(8)].map(x=>Array(8).fill(2));
        setGridFunc(newGrid)
      }} >8</button>
      
      <div className={"board"} style = {{gridTemplate: `repeat(${currentGridSize}, ${100/currentGridSize}%)/repeat(${currentGridSize}, ${100/currentGridSize}%)`}}>
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
