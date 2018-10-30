import { useState } from "react";
import Avatar from "./Avatar";
import { Paper, Button } from "@material-ui/core";
import { textColor } from "../styles";

const s = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
    margin: 100,
    backgroundColor: "rgba(255,255,255,0.75)"
  },
  name: {
    textAlign: "center",
    color: textColor,
    fontSize: "2em",
    marginTop: 20,
    marginBottom: 10
  },
  desc: {
    color: textColor,
    textAlign: "center",
    maxWidth: "80vw",
    fontSize: "1.3em"
  },
  controls: {
    color: textColor,
    textAlign: "center",
    maxWidth: "50vw",
    fontSize: "1em"
  },
  frame: {
    width: 1200,
    height: 600
  },
  playButton: {
    margin: 10
  }
};

export default ({ title, description, url, controls }) => {
  const [play, setPlay] = useState(false);

  return (
    <Paper style={s.container}>
      <h3 style={s.name}>{title}</h3>
      <p style={s.desc}>{description}</p>
      <p style={s.controls}>{controls}</p>
      {!play && (
        <Button
          style={s.playButton}
          onClick={() => setPlay(true)}
          variant="outlined"
          color="secondary"
        >
          Play
        </Button>
      )}
      {play && <iframe src={url} style={s.frame} />}
    </Paper>
  );
};
