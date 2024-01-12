////////////////////////useEffect example 2/////////////////////////////////////useEffect example 1 ////////////////
import React, { useState, useEffect } from "react";

export default function App() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);
  console.log("render");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .then((json) => console.log(json));
    // console.log('render the data');
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
}
