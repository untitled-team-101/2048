"use strict"
import {useEffect, useState} from 'react'

const getValue = (key, initialValue) => {
  return JSON.parse(localStorage.getItem(key)) || initialValue
}

const useStorage = (key, initialValue) => {
  const [value, saveValue] = useState(() => {
    return getValue(key, initialValue)
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])
  return [value, saveValue]
}

export default useStorage;
