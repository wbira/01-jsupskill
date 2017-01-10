import React from 'react'
import Message from './Message'

const MyFirstComponent = React.createClass({
  getInitialState () {
    return {
      value: 0
    }
  },

  onClick (i) {
    this.setState({
      value: this.state.value + i
    })
  },

  render () {
    return (
      <div>
        <Message message='Hello 1'/>
        <Message message={this.state.value}/>
        <button onClick={this.onClick.bind(this, 1)} disabled={this.state.value >= 5}>Count up!</button>
        <button onClick={this.onClick.bind(this, -1)}>Count down!</button>
      </div>
    )
  }
})

export default MyFirstComponent
