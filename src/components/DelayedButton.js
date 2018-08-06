// Code DelayedButton Component Here
import React from 'react';

export default DelayedButton extends React.Component {

  handleClick = (event) => {
    return(this.props.onDelayedClick)
  }

  handleDelay = () => {
    return(this.props.delay)
  }

  render() {
    return(
      <button handleClick={this.handleClick} />
    )
  }

}
