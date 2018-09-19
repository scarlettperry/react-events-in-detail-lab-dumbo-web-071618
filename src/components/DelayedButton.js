// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }

  render(){
    return (
      <button onClick={this.handleClick}>Click me too!</button>
    )
  }
}

export default DelayedButton
