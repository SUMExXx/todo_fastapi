// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(e){
        this.setState({value: e.target.value})
    }

    async handleSubmit(e){
        e.preventDefault();
        try{
            var res = await fetch( `https://crud-fastapi.onrender.com/add/${this.state.value}`, {
                method: "POST",
                
            })
            console.log(res)


        } catch(err){
            console.log(err)
        }

        
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="row g-3">
        
        <div className="col-auto">
            <label htmlFor="inputTodo" className="visually-hidden">Todo</label>
            <input type="text" className="form-control" id="inputTodo" value={this.state.value} onChange={this.handleChange} placeholder="Todo"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
        </div>
    </form>
    )
  }
}

export default Form