import React from 'react'

const getSavedValue = (key, initialValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key))
}

function useLocalStorage (key, initialValue) {
  return (
    <div>useLocalStorage</div>
  )
}

export default useLocalStorage