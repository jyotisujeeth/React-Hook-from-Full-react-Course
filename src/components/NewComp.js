import React, { Component } from 'react'
// import bell from "./bell.jpg"
// import not from "./not.jpg";
export class NewComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "subscribe to my new channel",
      sub: "subscribe",
      imageURL:
        "https://th.bing.com/th?id=OIP.WKeWzEzMK_O7FkMS7C0m-AHaHe&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
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
      imageURL:
        "https://th.bing.com/th?id=OIP.wTBYwLv7x8d1Hi9B3TdDWgHaH_&w=240&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    });
  }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{this.state.sub}</button>
     <p/>
     <img style={(width: "30px", height:"15px")} src={this.state.imageURL} alt='thebell iamge'/>
      </div>
    );
  }
}

export default NewComp