import React, { useContext } from 'react'
import DataContext from './DataContext.js'

export const Welcome = () => {

    const {name,age} =useContext(DataContext);
  return (
    <div>
        <h2>Welcome</h2>
        <p>Name:{name}</p>
        <p>Age:{age}</p>

    </div>
  )
}
