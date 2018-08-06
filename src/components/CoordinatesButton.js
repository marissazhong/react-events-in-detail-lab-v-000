// Code CoordinatesButton Component Here
import React from 'react';

export default CoordinatesButton extends React.Component {

  handleCoordinate = (event) => {
    return(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
  }

  render() {
    return(
      <button handleCoordinate={this.handleCoordinate} />
    )
  }

}
