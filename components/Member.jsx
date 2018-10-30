import Avatar from "../components/Avatar";
import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

export default ({ name, description, avatar }) => {
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
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 50,
        backgroundColor: "rgba(255,255,255,0.75)"
      }}
    >
      <Avatar image={avatar} />
      <h3
        style={{
          textAlign: "center",
          color: color,
          fontSize: "2em",
          marginTop: 20,
          marginBottom: 10
        }}
      >
        {name}
      </h3>
      <p
        style={{
          color: color,
          textAlign: "center",
          maxWidth: "30vw",
          fontSize: "1.5em"
        }}
      >
        {description}
      </p>
    </Paper>
  );
};
