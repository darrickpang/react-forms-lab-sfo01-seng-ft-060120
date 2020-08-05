import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.maxChars,
      text: ''
    };
  }

  decrement = (event) => {
    const newCount = this.state.count - 1
    this.setState({
      count: newCount,
      text: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.text} onChange={event => this.decrement(event)}/>
        {/* <input type="text" name="message" id="message" onChange={event => this.decrement(event)} /> */}
        <p>Characters left: {this.state.count}</p>
      </div>
    );
  }
}

export default TwitterMessage;