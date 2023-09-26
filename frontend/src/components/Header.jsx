// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import TodoItem from './TodoItem';
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import ReactDOM from 'react-dom/client';

export class Header extends Component {

  constructor(props){
    super(props);
  }

  get_url = "http://127.0.0.1:8000/todos"

  get =() =>{

        

        const root = ReactDOM.createRoot(
          document.getElementById('todo-items')
        );
        
        try{
            fetch( `https://crud-fastapi.onrender.com/todos`, {
                method: "GET",
                
            }).then(res => res.json()).then(js => {var result = []; var jsn = JSON.parse(js); for(var i in jsn){result.push([i, jsn[i]])} root.render(<div>{result.map((key) => <TodoItem key={crypto.randomUUID()} no={key[0]} desc={key[1]}/>)}</div>); console.log(js)})
            

        } catch(err){
            console.log(err)
        }

        
        
 
    }


  render() {
    return (
      <div className='row d-flex'>
        <div className='col-md-2'>
          <button type="button" className="btn btn-outline-primary" onClick={this.get}>Refresh</button>
        </div>

        <div className='col-md-7'>
          <h3>Todo</h3>
        </div>
        
        
        
      </div>
    )
  }
}

export default Header