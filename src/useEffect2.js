////////////////////////useEffect example 2/////////////////////////////////////useEffect example 1 ////////////////
////////////////////re size ing the window width //////////////
import React, { useState, useEffect } from "react";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>{windowWidth}</div>
    </>
  );
}
