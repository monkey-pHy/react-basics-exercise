/*
 * @Date: 2023-03-09 16:02:02
 * @LastEditors: pengheyan
 * @LastEditTime: 2023-03-09 16:48:03
 * @FilePath: \react-basics-exercise\src\App.jsx
 */
import { useState } from 'react'
import BaseUse from './components/baseUse/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BaseUse />
    </div>
  )
}

export default App
