export const shiftUp = (grid, score) => {
  const moves = []
  const merges = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if(grid[i][j] > 0){
        for(let k = 0; k < i; k++){
          if(grid[k][j] === grid[i][j]){
            if(k < i-1){
              console.log(1, i, j, k)
              if(grid[k+1][j] === 0){
                console.log(1, i, j, k)
                grid[k][j] = grid[i][j] * 2
                grid[i][j] = 0
                merges.push({
                  from: {x: i, y: j},
                  to: {x: k, y: j}
                })
                break
              }
            }
            else {
              console.log(1, i, j, k)
              grid[k][j] = grid[i][j] * 2
              grid[i][j] = 0
              merges.push({
                from: {x: i, y: j},
                to: {x: k, y: j}
              })
              break
            }
          }
          if(grid[k][j] === 0){
            console.log(4)
            grid[k][j] = grid[i][j]
            grid[i][j] = 0
            moves.push({
              from: {x: i, y: j},
              to: {x: k, y: j}
            })
            break
          }
        }
      }
    }
  }
  return {moves, merges, score}
}


export const shiftDown = (grid, score) => {
  const moves = []
  const merges = []
  for (let i = grid.length - 1; i >= 0; i--) {
    for (let j = 0; j < grid.length; j++) {
      if(grid[i][j] > 0){
        for(let k = grid.length - 1; k > i; k--){
          if(grid[k][j] === grid[i][j]){
            if(k > i+1){
              console.log(1, i, j, k)
              if(grid[k-1][j] === 0){
                console.log(1, i, j, k)
                grid[k][j] = grid[i][j] * 2
                grid[i][j] = 0
                merges.push({
                  from: {x: i, y: j},
                  to: {x: k, y: j}
                })
                break
              }
            }
            else {
              console.log(1, i, j, k)
              grid[k][j] = grid[i][j] * 2
              grid[i][j] = 0
              merges.push({
                from: {x: i, y: j},
                to: {x: k, y: j}
              })
              break
            }
          }
          if(grid[k][j] === 0){
            console.log(4)
            grid[k][j] = grid[i][j]
            grid[i][j] = 0
            moves.push({
              from: {x: i, y: j},
              to: {x: k, y: j}
            })
            break
          }
        }
      }
    }
  }
  return {moves, merges, score}
}

export const shiftLeft = (grid, score) => {
  const moves = []
  const merges = []
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid.length; i++) {
      if(grid[i][j] > 0){
        for(let k = 0; k < j; k++){
          if(grid[i][k] === grid[i][j]){
            if(k < j-1){
              console.log(1, i, j, k)
              if(grid[i][k+1] === 0){
                console.log(1, i, j, k)
                grid[i][k] = grid[i][j] * 2
                grid[i][j] = 0
                merges.push({
                  from: {x: i, y: j},
                  to: {x: i, y: k}
                })
                break
              }
            }
            else {
              console.log(1, i, j, k)
              grid[i][k] = grid[i][j] * 2
              grid[i][j] = 0
              merges.push({
                from: {x: i, y: j},
                to: {x: i, y: k}
              })
              break
            }
          }
          if(grid[i][k] === 0){
            console.log(4)
            grid[i][k] = grid[i][j]
            grid[i][j] = 0
            moves.push({
              from: {x: i, y: j},
              to: {x: i, y: k}
            })
            break
          }
        }
      }
    }
  }
  return {moves, merges, score}
}


export const shiftRight = (grid, score) => {
  const moves = []
  const merges = []
  for (let j = grid.length -1; j >= 0; j--) {
    for (let i = 0; i < grid.length; i++) {
      if(grid[i][j] > 0){
        for(let k = grid.length; k > j; k--){
          if(grid[i][k] === grid[i][j]){
            if(k > j+1){
              console.log(1, i, j, k)
              if(grid[i][k-1] === 0){
                console.log(1, i, j, k)
                grid[i][k] = grid[i][j] * 2
                grid[i][j] = 0
                merges.push({
                  from: {x: i, y: j},
                  to: {x: i, y: k}
                })
                break
              }
            }
            else {
              console.log(1, i, j, k)
              grid[i][k] = grid[i][j] * 2
              grid[i][j] = 0
              merges.push({
                from: {x: i, y: j},
                to: {x: i, y: k}
              })
              break
            }
          }
          if(grid[i][k] === 0){
            console.log(4)
            grid[i][k] = grid[i][j]
            grid[i][j] = 0
            moves.push({
              from: {x: i, y: j},
              to: {x: i, y: k}
            })
            break
          }
        }
      }
    }
  }
  return {moves, merges, score}
}