import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  {/*displayer for counter, used as a passing state*/}
  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  return (
    <div>
      <Display counter={counter}/>

      {/*plus button*/}
      <Button 
        onClick={increaseByOne} 
        text = 'plus'
      />
      
      {/*minus button*/}
      <Button 
        onClick={decreaseByOne}
        text = 'minus'
      />
      
      {/*zero button*/}
      <Button 
        onClick={setToZero}
        text = 'zero'
      />

    </div>
    
    
  )
}

export default App