import React from 'react'

const { number } = React.PropTypes

const Message2 = (props) => {
  return (
    <h1>{ props.message }</h1>
  )
}

Message2.propTypes = {
  message: number
}

export default Message2
