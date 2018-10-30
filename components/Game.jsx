import { useState, useEffect } from "react";
import { Paper, Button } from "@material-ui/core";

export default ({ title, description, url, controls }) => {
  const [play, setPlay] = useState(false);
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
        margin: 100,
        backgroundColor: "rgba(255,255,255,0.75)"
      }}
    >
      <h3
        style={{
          textAlign: "center",
          color: color,
          fontSize: "2em",
          marginTop: 20,
          marginBottom: 10
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: color,
          textAlign: "center",
          maxWidth: "80vw",
          fontSize: "1.3em"
        }}
      >
        {description}
      </p>
      <p
        style={{
          color: color,
          textAlign: "center",
          maxWidth: "50vw",
          fontSize: "1em"
        }}
      >
        {controls}
      </p>
      {!play && (
        <Button
          style={{ margin: 10 }}
          onClick={() => setPlay(true)}
          variant="outlined"
          color="secondary"
        >
          Play
        </Button>
      )}
      {play && (
        <iframe
          src={url}
          style={{
            width: 1200,
            height: 600
          }}
        />
      )}
    </Paper>
  );
};
