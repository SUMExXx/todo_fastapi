// eslint-disable-next-line no-unused-vars
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import Form from './components/form'

import './App.css'


function App() {
  

  return (
    <div className='container'>
      <Header/>
      <hr/>
      <div className='container' id="todo-items" >
        
      </div>
      <div className="container">
        <hr/>
        <Form />
      </div>
    </div>
  )
}

export default App
