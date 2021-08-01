"use strict"

const countEmptyCells = (grid) => {
  let count = 0;
  for (let row of grid)
    for (let cell of row)
      if (cell === 0)
        count++
  return count
}

const pushTileAt = (grid, pos) => {
  for (let i in grid) {
    for (let j in grid[i]) {
      if (grid[i][j] === 0) {
        if (pos === 0) {
          grid[i][j] = 2
          return
        }
        pos--
      }
    }
  }
}

export default function addTile(grid) {
  const emptyCount = countEmptyCells(grid)
  const randomPos = Math.floor(Math.random() * emptyCount)
  pushTileAt(grid, randomPos === emptyCount ? emptyCount - 1 : randomPos)
}