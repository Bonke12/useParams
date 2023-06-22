import React from 'react'
import Cards from './Components/Cards'
import data from './Data/Data'

function App() {
  return (
    <>
    <Cards props={data}/>
    </>
  )
}

export default App