import React from 'react'
import { useContext} from 'react'
import { Data ,Data1} from './App'

const ComponentC = () => {
    
    const name = useContext(Data);
    const age= useContext(Data1);
    
  return (
      <div>
          <h1>{name} {age}</h1>
          
    </div>
  )
}

export default ComponentC