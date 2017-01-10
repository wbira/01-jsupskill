import React from 'react'

const { string } = React.PropTypes

const Message2 = (props) => {
  return (
    <h1>{ props.message }</h1>
  )
}

Message2.propTypes = {
  message: string
}

export default Message2
