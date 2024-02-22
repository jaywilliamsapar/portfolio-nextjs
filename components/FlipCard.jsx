import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCard = ({ frontImage, backImage, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="front" onClick={handleClick}>
        <img src={frontImage} alt="Front" />
        <h1>{frontText}</h1>
      </div>
      <div className="back" onClick={handleClick}>
        <img src={backImage} alt="Back" />
        <h1>{backText}</h1>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;