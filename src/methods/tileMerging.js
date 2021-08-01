export const shiftLeft = (grid) => {
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i + 1];
          grid[j][i + 1] = 0;
        }
      }
    }
  }
  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === grid[j][i + 1]) {
        grid[j][i] *= 2;
        grid[j][i + 1] = 0;
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i + 1];
          grid[j][i + 1] = 0;
        }
      }
    }
  }
}

export const shiftRight = (grid) => {
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i - 1];
          grid[j][i - 1] = 0;
        }
      }
    }
  }
  for (let i = grid.length; i > 0; i--) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] === grid[j][i - 1]) {
        grid[j][i] *= 2;
        grid[j][i - 1] = 0;
      }
    }
  }
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[j][i] === 0) {
          grid[j][i] = grid[j][i - 1];
          grid[j][i - 1] = 0;
        }
      }
    }
  }
}

export const shiftUp = (grid) => {
  for (let k = 0; k < grid.length; k++) {
    for (let i = 0; i < grid.length - 1; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0){
          grid[i][j] = grid[i+1][j];
          grid[i+1][j] = 0;
        }
      }
    }
  }
  for(let i = 0; i < grid.length-1; i++) {
      for(let j = 0; j < grid.length; j++) {
        if (grid[i][j] === grid[i+1][j]) {
          grid[i][j]*= 2;
          grid[i + 1][j] = 0;
        }
      }
    }
    for (let k = 0; k < grid.length; k++) {
    for(let i = 0; i < grid.length-1; i++) {
      for(let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0){
          grid[i][j] = grid[i+1][j];
          grid[i+1][j] = 0;
        }
      }
    }
  }
}

export const shiftDown = (grid) => {
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length-1; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0){
          grid[i][j] = grid[i-1][j];
          grid[i-1][j] = 0;
        }
      }
    }
  }
  for (let i = grid.length-1; i > 0; i--) {
      for(let j = 0; j < grid.length; j++) {
        if (grid[i][j] === grid[i-1][j]) {
          grid[i][j]*= 2;
          grid[i - 1][j] = 0;
        }
      }
    }
  for (let k = 0; k < grid.length; k++) {
    for (let i = grid.length-1; i > 0; i--) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === 0){
          grid[i][j] = grid[i-1][j];
          grid[i-1][j] = 0;
        }
      }
    }
  }
}
