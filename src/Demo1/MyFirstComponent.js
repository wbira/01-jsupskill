import React from 'react'
import Message from './Message'

const Button = React.createClass({
  render () {
    return (
      <div>
        <button onClick={this.props.onclick}>Count down!</button>
      </div>
    )
  }
})

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
        <Button onclick={this.onClick.bind(this, 1)} />
      </div>
    )
  }
})

export default MyFirstComponent
