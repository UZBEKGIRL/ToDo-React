import { useState } from 'react'
import cn from './App.module.scss'
import clsx from 'clsx'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>    
    </>
  )
}

export default App
