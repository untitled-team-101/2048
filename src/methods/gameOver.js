const isGameOver = (grid) => {
  console.log(grid);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      console.log(i, j);
      if (grid[i][j] === 0) {
        return false;
      } else if (i < grid.length - 1 && grid[i][j] === grid[i + 1][j]) {
        return false;
      } else if (j < grid[i].length - 1 && grid[i][j] === grid[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
}

export default isGameOver;