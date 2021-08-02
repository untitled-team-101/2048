export default function(grid, gridSize) {
  let checkFor = gridSize === 3 ? 128 : gridSize === 4 ? 2048 : 8192
  for(let row of grid)
    for(let cell of row)
      if(checkFor === cell)
        return true
  return false
}
