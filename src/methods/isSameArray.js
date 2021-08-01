"use strict"
const isSameArray = (array1, array2) => {
  if (array1 === array2)
    return true
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length)
      return false
    for (let i in array1) {
      if (!isSameArray(array1[i], array2[i]))
        return false
    }
    return true
  }
  return false
}

export default isSameArray;
