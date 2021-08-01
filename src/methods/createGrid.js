const createGrid = (size) => {
  return [...Array(size)].map(x => Array(size).fill(2));
}

export default createGrid;