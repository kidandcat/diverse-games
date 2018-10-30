import Head from "next/head";
import Trianglify from "trianglify";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const s = {
  navbar: {
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.75)"
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "rgb(0, 196, 189)",
    fontSize: "2em"
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "10vh"
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1
  }
};

export default class Layout extends React.Component {
  componentDidMount() {
    const pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight,
      x_colors: "BuGn"
    });
    document.querySelector("#background").innerHTML = "";
    document.querySelector("#background").appendChild(pattern.canvas());
  }
  render() {
    return (
      <div>
        <Head>
          <title>FRAGMENT</title>
          <link
            href="https://fonts.googleapis.com/css?family=Exo+2"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <style jsx global>{`
          html {
            font-family: "Exo 2", sans-serif;
          }
          body {
            margin: 0;
          }
        `}</style>
        <AppBar position="static" style={s.navbar} color="default">
          <Toolbar>
            <Typography style={s.title}>FRAGMENT</Typography>
          </Toolbar>
        </AppBar>
        <div style={s.content}>{this.props.children}</div>
        <div style={s.background} id="background" />
      </div>
    );
  }
}
