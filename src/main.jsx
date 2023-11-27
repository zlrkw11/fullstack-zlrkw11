import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

setInterval(() => {
  refresh()
  counter += 1
}, 1000)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter}/>
)

