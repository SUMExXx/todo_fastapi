// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Edit extends Component {
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
            var res = await fetch( `https://crud-fastapi.onrender.com/update/${this.props.id_n}/${this.state.value}`, {
                method: "PUT",
                
            })
            console.log(res)


        } catch(err){
            console.log(err)
        }

        
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit} className="row g-3 hide">
        
        <div className="col-auto">
            <label htmlFor="inputTodo" className="visually-hidden">Todo</label>
            <input type="text" className="form-control" id="inputTodo" value={this.state.value} onChange={this.handleChange} placeholder="edit"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-success mb-3">Save</button>
        </div>
    </form>
    )
  }
}

Edit.propTypes = {
  id_n: PropTypes.string,
  
  
}

export default Edit