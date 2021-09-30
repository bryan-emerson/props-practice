import React, { Component } from 'react';
import './style.css'

export default class Button extends Component {
  render(){
    console.log('from button', this.props)
    return(
      <div className='button'>
        <button onClick={this.props.countPlus}>Count up Brodie!</button>
      </div>
    )
  }
}