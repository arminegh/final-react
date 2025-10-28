import { useEffect } from 'react'

import { useState } from 'react'
import './App.css'
import { getItems } from './main'

function App() {
  
  useEffect(()=> {
    getItems();
  },[])

  return (
    <>
      <h1>Firebase</h1>
    </>
  )
}

export default App
