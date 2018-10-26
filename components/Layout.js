import Head from "next/head";
import Trianglify from "trianglify";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const s = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%"
  },
  title: {
    flexGrow: 1
  },
  background: {
    position: "fixed"
  }
};

export default class Layout extends React.Component {
  componentDidMount() {
    const pattern = Trianglify({
      width: window.innerWidth,
      height: window.innerHeight
    });
    document.querySelector("#background").innerHTML = "";
    document.querySelector("#background").appendChild(pattern.canvas());
  }
  render() {
    return (
      <div>
        <Head>
          <title>Test App</title>
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
        </Head>
        <style jsx global>{`
                html { 
                    font-family: 'Lato', sans-serif;
                }
                body {
                    margin: 0;
                }
            `}</style>
        <AppBar position="static" style={s.navbar} color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" style={s.title}>
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={s.content}>{this.props.children}</div>
        <div style={s.background} id="background" />
      </div>
    );
  }
}
