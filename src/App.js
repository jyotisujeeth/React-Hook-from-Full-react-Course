////////////////////////useEffect example 2/////////////////////////////////////useEffect example 1 ////////////////
import React, { useState, useEffect } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("Posts");

  console.log("render");

  useEffect(() => {
   
    console.log('render the data');
    return() => {
      console.log("render the resource change  data");
    }
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      
    </>
  );
}
