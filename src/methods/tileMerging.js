export const shiftLeft = (grid, score) => {
  const moves = []
  const merges = []
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i + 1];
          grid[j][i + 1] = 0;
          moves.push({
            from: {x: j, y: i+1},
            to: {x: j, y: i}
          })
        }
      }
    }
  }
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === grid[j][i + 1]) {
        grid[j][i] *= 2;
        score = score + grid[j][i];
        grid[j][i + 1] = 0;
        merges.push({
          from: {x: j, y: i+1},
          to: {x: j, y: i}
        })
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i + 1];
          grid[j][i + 1] = 0;
          moves.push({
            from: {x: j, y: i},
            to: {x: j, y: i+1}
          })
        }
      }
    }
  }
  return {moves, merges, score}
}

export const shiftRight = (grid, score) => {
  const moves = []
  const merges = []
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i - 1];
          grid[j][i - 1] = 0;
          moves.push({
            from: {x: j, y: i-1},
            to: {x: j, y: i}
          })
        }
      }
    }
  }
  for (let i = grid.length; i > 0; i--) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === grid[j][i - 1]) {
        grid[j][i] *= 2;
        score = score + grid[j][i];
        grid[j][i - 1] = 0;
        merges.push({
          from: {x: j, y: i-1},
          to: {x: j, y: i}
        })
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i - 1];
          grid[j][i - 1] = 0;
          moves.push({
            from: {x: j, y: i-1},
            to: {x: j, y: i}
          })
        }
      }
    }
  }
  return {moves, merges, score}
}

export const shiftUp = (grid, score) => {
  const moves = []
  const merges = []
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = grid[i + 1][j];
          grid[i + 1][j] = 0;
          moves.push({
            from: {x: i+1, y: j},
            to: {x: i, y: j}
          })
        }
      }
    }
  }
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === grid[i + 1][j]) {
        grid[i][j] *= 2;
        score = score + grid[i][j];
        grid[i + 1][j] = 0;
        merges.push({
          from: {x: i+1, y: j},
          to: {x: i, y: j}
        })
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = grid[i + 1][j];
          grid[i + 1][j] = 0;
          moves.push({
            from: {x: i+1, y: j},
            to: {x: i, y: j}
          })
        }
      }
    }
  }
  return {moves, merges, score}
}

export const shiftDown = (grid, score) => {
  const moves = []
  const merges = []
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length - 1; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = grid[i - 1][j];
          grid[i - 1][j] = 0;
          moves.push({
            from: {x: i-1, y: j},
            to: {x: i, y: j}
          })
        }
      }
    }
  }
  for (let i = grid.length - 1; i > 0; i--) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === grid[i - 1][j]) {
        grid[i][j] *= 2;
        score = score + grid[i][j];
        grid[i - 1][j] = 0;
        merges.push({
          from: {x: i-1, y: j},
          to: {x: i, y: j}
        })
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length - 1; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0) {
          grid[i][j] = grid[i - 1][j];
          grid[i - 1][j] = 0;
          moves.push({
            from: {x: i-1, y: j},
            to: {x: i, y: j}
          })
        }
      }
    }
  }
  return {moves, merges, score}
}
