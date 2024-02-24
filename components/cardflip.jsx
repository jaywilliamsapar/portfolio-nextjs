import React from "react";
import FlipCard from "./FlipCard";

const App = () => {
  return (
    <div className="App">
      <FlipCard
        frontImage="path/to/front-image.jpg"
        backImage="path/to/back-image.jpg"
        frontText="Front Side"
        backText="Back Side"
      />
    </div>
  );
};

export default App;