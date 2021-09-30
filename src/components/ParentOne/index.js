import React, { Component } from 'react'
import ChildOne from '../ChildOne/index.js'
import './style.css'

export default class Parent extends Component {
  state = {
    partyArr: ['tacos', 'capri suns', 'jernts', 'sour gummies', 'popsicles', 'bbq chips'],
    workArr: ['pencils', 'erasers', 'stapler', 'calendar', 'alarm clock'],
    count: 1
  }

  handleCallback = (childData) => {
    this.setState({ kidData: childData })
  }

  countPlus = ()=>{
    this.setState({count: this.state.count + 1})
  }

  getArrItems = (arr) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
      tempArr.push(<li>{arr[i]}</li>);
    }
    return tempArr;
  }

  getChildArrItems = (arr) => {
    let tempArr = [];
      for (let i = 0; i < arr.length; i ++) {
        tempArr.push(<li>{arr[i]}</li>);
      }
      return tempArr;
  }

  render() {
    console.log("line 31", this.state.kidData)
    return (
      <div className='parent'>
        <p>sup widdit</p>
        <p>peep the count:{this.state.count}</p>
        <ChildOne party={this.state.partyArr} funky={this.getArrItems} call={this.handleCallback} upOne={this.countPlus}/>
        {this.state.kidData}

      </div>
    )
  }
}