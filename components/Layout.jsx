import Head from "next/head";
import Trianglify from "trianglify";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import tinycolor from "tinycolor2";

const s = {
  navbar: {
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.75)"
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
  state = {
    color: "white",
    loading: true
  };
  componentDidMount() {
    const pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });
    let darker;
    let lightning = 0.0;
    for (let p of pattern.polys) {
      let tcolor = tinycolor(p[0]);
      if (!darker || (tcolor.getLuminance() < lightning && tcolor.isDark())) {
        darker = p[0];
        lightning = tcolor.getLuminance();
      }
    }
    var event = new Event("color");
    window.color = darker;
    window.dispatchEvent(event);
    this.setState({
      color: window.color,
      loading: false
    });

    document.querySelector("#background").innerHTML = "";
    document.querySelector("#background").appendChild(pattern.canvas());
  }
  render() {
    return (
      <div>
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            top: 0,
            left: 0,
            backgroundColor: "black",
            zIndex: 1000,
            color: "white",
            display: this.state.loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center"
          }}
          id="foreground"
        >
          Loading . . .
        </div>
        <Head>
          <title>FRAGMENT</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: Arcade;
            src: url("/static/fonts/pixelfj8pt1.normal.ttf");
          }
          * {
            font-family: "Arcade" !important;
          }
          body {
            margin: 0;
          }
        `}</style>
        <AppBar position="static" style={s.navbar} color="default">
          <Toolbar>
            <Typography
              style={{
                flexGrow: 1,
                textAlign: "center",
                color: this.state.color,
                fontSize: "2em"
              }}
            >
              FRAGMENT
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={s.content}>{this.props.children}</div>
        <div style={s.background} id="background" />
      </div>
    );
  }
}
