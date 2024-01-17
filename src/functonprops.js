import React from "react";

function functionprops(props) {
    return (
      <div>
        <h3>this is function components</h3>,
        <h3>hello learner welcome{props.name} fromv{props.place}</h3>
      </div>
    );

    }

export default functionprops;