// eslint-disable-next-line no-unused-vars
import React, {useState, Component } from 'react';
import PropTypes from 'prop-types';

import Edit from './Edit';

export class TodoItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      hideStatus: true
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  toggleHide = () =>{
    this.setState({
      hideStatus: !this.state.hideStatus
    })
  }

  

  async handleEdit(){
      this.toggleHide()
  }

  async handleDelete(){
      try{
          var res = await fetch( `https://crud-fastapi.onrender.com/delete/${this.props.no}`, {
              method: "DELETE",
              
          })
          console.log(res)


      } catch(err){
            console.log(err)
      }
  }

  render() {
    return (
      <div className='row border d-flex justify-content-between p-1 rounded' style={{marginBottom: '10px'}} >
        
        <div className='col-md-1 align-middle'> 
          <span className='align-middle'>{this.props.no}</span>
        </div>
        <div className='col-md-5'>
          <span className='h-100 align-middle'>{this.props.desc}</span>
        </div>

        <Edit id_n={this.props.no} />

        <style>
          {`
          .hide{
            display: ${this.state.hideStatus ? 'none' : 'block'};
            
          }

          .edt{
            display: ${this.state.hideStatus ? 'block': 'none'};
          }

          
        `}
        </style>
        
        <div className='col-md-2'>
          <button type="button" className="btn btn-outline-warning edt" onClick={this.handleEdit}>Edit</button>
        </div>
        
        <div className='col-md-3'>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleDelete}>Delete</button>
        </div>
        
      </div>
    )
  }
}

TodoItem.propTypes = {
  no: PropTypes.string,
  desc: PropTypes.string,
  
}

export default TodoItem