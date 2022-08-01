import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(1)

  
  const handleButtonPlusClick = () => {
    setCount(count + 1)
  }

  
  const handleButtonMinusClick = () => {
    setCount(count - 1)
  }

  


  return (
    <div>
      <div>{count}</div>
      <button onClick={handleButtonMinusClick}>-</button>
      <button onClick={handleButtonPlusClick}>+</button>
    </div>
  )
}

export default App