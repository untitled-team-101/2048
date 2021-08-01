export const shiftLeft = (grid, score) => {
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
                score = score + grid[j][i];
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
    return score;
}

export const shiftRight = (grid, score) => {
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
                score = score + grid[j][i];
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
    return score;
}

export const shiftUp = (grid, score) => {
    for (let k = 0; k < grid.length; k++) {
        for (let i = 0; i < grid.length - 1; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 0) {
                    grid[i][j] = grid[i + 1][j];
                    grid[i + 1][j] = 0;
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
            }
        }
    }
    for (let k = 0; k < grid.length; k++) {
        for (let i = 0; i < grid.length - 1; i++) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 0) {
                    grid[i][j] = grid[i + 1][j];
                    grid[i + 1][j] = 0;
                }
            }
        }
    }
    return score;
}

export const shiftDown = (grid, score) => {
    for (let k = 0; k < grid.length; k++) {
        for (let i = grid.length - 1; i > 0; i--) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 0) {
                    grid[i][j] = grid[i - 1][j];
                    grid[i - 1][j] = 0;
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
            }
        }
    }
    for (let k = 0; k < grid.length; k++) {
        for (let i = grid.length - 1; i > 0; i--) {
            for (let j = 0; j < grid.length; j++) {
                if (grid[i][j] === 0) {
                    grid[i][j] = grid[i - 1][j];
                    grid[i - 1][j] = 0;
                }
            }
        }
    }
    return score;
}
