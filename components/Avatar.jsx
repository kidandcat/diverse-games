import { useState, useEffect } from "react";

export default ({ image }) => {
  const [color, setColor] = useState("gray");

  useEffect(() => {
    if (window.color) {
      setColor(window.color);
    } else {
      window.addEventListener("color", () => {
        setColor(window.color);
      });
    }
  }, []);

  return (
    <div
      style={{
        width: `25vh`,
        height: `25vh`,
        borderRadius: "500px",
        border: `2px solid ${color}`,
        overflow: "hidden",
        margin: 15
      }}
    >
      <img src={image} style={{ width: "100%" }} />
    </div>
  );
};
