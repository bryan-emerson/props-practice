import React, { Component } from 'react'

export default class ChildOne extends Component {
  state = {
    actArr: ['skis', 'bike', 'tent', 'camera', 'helmet'],
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

    //console.log(this)
    return(
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}