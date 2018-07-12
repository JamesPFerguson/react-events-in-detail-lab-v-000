// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    this.props.onDelayedClick
  }

  render() {
    return (

    )
  }

}
