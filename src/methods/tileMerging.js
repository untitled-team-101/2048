var array = [
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 2],
]

const shiftLeft = () => {
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j][i] === 0) {
          array[j][i] = array[j][i + 1];
          array[j][i + 1] = 0;
        }
      }
    }
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] === array[j][i + 1]) {
        array[j][i] *= 2;
        array[j][i + 1] = 0;
      }
    }
  }
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j][i] === 0) {
          array[j][i] = array[j][i + 1];
          array[j][i + 1] = 0;
        }
      }
    }
  }
}

const shiftRight = () => {
  for (let k = 0; k < array.length; k++) {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < array.length; j++) {
        if (array[j][i] === 0) {
          array[j][i] = array[j][i - 1];
          array[j][i - 1] = 0;
        }
      }
    }
  }
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < array.length; j++) {
      if (array[j][i] === array[j][i - 1]) {
        array[j][i] *= 2;
        array[j][i - 1] = 0;
      }
    }
  }
  for (let k = 0; k < array.length; k++) {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < array.length; j++) {
        if (array[j][i] === 0) {
          array[j][i] = array[j][i - 1];
          array[j][i - 1] = 0;
        }
      }
    }
  }
}

const shiftUp = () => {
  for (let k = 0; k < array.length; k++) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 0){
          array[i][j] = array[i+1][j];
          array[i+1][j] = 0;
        }
      }
    }
  }
  for(let i = 0; i < array.length-1; i++) {
      for(let j = 0; j < array.length; j++) {
        if (array[i][j] === array[i+1][j]) {
          array[i][j]*= 2;
          array[i + 1][j] = 0;
        }
      }
    }
    for (let k = 0; k < array.length; k++) {
    for(let i = 0; i < array.length-1; i++) {
      for(let j = 0; j < array.length; j++) {
        if (array[i][j] === 0){
          array[i][j] = array[i+1][j];
          array[i+1][j] = 0;
        }
      }
    }
  }
}

const shiftDown = () => {
  for (let k = 0; k < array.length; k++) {
    for (let i = array.length-1; i > 0; i--) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 0){
          array[i][j] = array[i-1][j];
          array[i-1][j] = 0;
        }
      }
    }
  }
  for (let i = array.length-1; i > 0; i--) {
      for(let j = 0; j < array.length; j++) {
        if (array[i][j] === array[i-1][j]) {
          array[i][j]*= 2;
          array[i - 1][j] = 0;
        }
      }
    }
  for (let k = 0; k < array.length; k++) {
    for (let i = array.length-1; i > 0; i--) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] === 0){
          array[i][j] = array[i-1][j];
          array[i-1][j] = 0;
        }
      }
    }
  }
}
