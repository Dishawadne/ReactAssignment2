import React, { useState } from 'react'
import DataContext from './DataContext.js';
import { Welcome } from './Welcome';


export default function LoginContext() {
    const [name,setName]=useState("Disha")
    const [age,setAge]=useState(19);

  return (
    <DataContext.Provider value={{name,age}}>
    <div>
        <Welcome/> 
    </div>
    </DataContext.Provider>
  )
}
