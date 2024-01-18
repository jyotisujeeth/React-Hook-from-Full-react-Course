import React from 'react';
import "./App.css";
import NewComp from './components/NewComp';


class App extends React.Component {
  styles ={
    fontStyle: 'bold',
    color: "teal"
  };

  render(){
    return(
      <div className="App">
        <h1 style={this.style}>
        welcome
        </h1>
        < NewComp/>
        </div>
    );
  }
}

export default App;