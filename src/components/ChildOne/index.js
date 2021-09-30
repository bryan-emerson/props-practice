import React, { Component } from 'react'
import Button from '../Button/index.js'
import './style.css'

export default class ChildOne extends Component {
  state = {
    actArr: ['skis', 'bike', 'tent', 'camera', 'helmet', 'backpack'],
    word: 'Skiing'
  }



  componentDidMount(){
    //this.props.call(this.state.actArr);
    this.props.call(this.state.actArr);
  }

  render() {
    console.log(this.props)
    let items

    if (this.props.party.length) {
      items = this.props.funky(this.props.party)
    }

    console.log(this.props.upOne)
    return(
      <div className='child'>
        <Button countPlus={this.props.upOne}/>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}
