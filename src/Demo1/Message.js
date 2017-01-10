import React from 'react'

const Message = React.createClass({
  render () {
    return (
      <h1>{ this.props.message }</h1>
    )
  }
})

export default Message
