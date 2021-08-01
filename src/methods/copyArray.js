"use strict"
const copyArray = (array) => {
  let clone = []
  if(Array.isArray(array))
    array.forEach((elm)=>{
      clone.push(copyArray(elm))
    })
  else
    return array
  return clone
}

export default copyArray;
