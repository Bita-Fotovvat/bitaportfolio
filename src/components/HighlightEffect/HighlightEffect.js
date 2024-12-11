import React, { useState, useEffect } from "react";
import "./HighlightEffect.scss";
import HomePage from "../../pages/HomePage/HomePage";

const HighlightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position state on mousemove
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="highlight-container">
      <div
        className="highlight"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
      ></div>
      <HomePage/>
      <div className="content">
      </div>
    </div>
  );
};

export default HighlightEffect;
