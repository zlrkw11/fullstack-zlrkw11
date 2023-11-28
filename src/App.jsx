import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)

  {/*Passing state*/}
  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  return (
    <div>
      <div>{counter}</div>

      {/*plus button*/}
      <button onClick={increaseByOne}> 
        plus
      </button>
      
      {/*reset button*/}
      <button onClick={setToZero}>
        zero
      </button>

    </div>
    
    
  )
}

export default App