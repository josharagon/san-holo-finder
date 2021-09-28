import React, { useState, useEffect } from "react";
import "./App.css";

import hummingbird from "/Users/josharagon/san-holo-finder/src/flying-bird-hummingbird.gif";
import ImageFadeIn from "react-image-fade-in";
import { wait } from "@testing-library/dom";

const App = () => {
  const [loading, setloading] = useState(true);
  const [opacity, setopacity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3300);
  });

  return (
    <div className="App">
      {loading && (
        <img
          src={hummingbird}
          style={{ opacity: opacity }}
          className="bird"
        ></img>
      )}

      {!loading && <h1>San Holo Finder</h1>}
    </div>
  );
};

export default App;
