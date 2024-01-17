import React from "react";
import Classprops from "./Classprops";
import functionprops from "./functionprops"
class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Classprops name="learner 1" place="placexeee">
            <p>child component</p>
          </Classprops>
          <Classprops name="learner 2" place="placexeee">
            <p>child component</p>
            <button>Click</button>
          </Classprops>
          <Classprops name="learner 3" place="placexerrree">
            <p>child component</p>
          </Classprops>
          <functionprops name="learner4" place="placeddd"></functionprops>
        </div>
      </>
    );
  }
}

export default App;