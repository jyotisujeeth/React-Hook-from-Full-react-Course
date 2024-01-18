import React, { Component } from 'react'

export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "subscribe to my new channel",
      sub: "subscribe",
    };
  }

  styles = {
    fontStyle: "italic",
    color: "red",
  };

  ButtonChange=() => {
    this.setState({
         message: "hit the bell icon to never mis an updtae ",
      sub: "subscribed",
    });
  }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default NewComp