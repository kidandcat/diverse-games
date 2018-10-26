import React from "react";
import Member from '../components/Member'

const s = {
  avatarContainer: {
    display: "flex",
    justifyContent: 'space-evenly'
  }
}

export default class Page extends React.Component {
  render() {
    return (
      <div style={s.avatarContainer}>
        <Member avatar="/static/jairo.jpg" name="Jairo Caro-Accino Viciana" description={`
          Full Stack From the web world: ReactJS & React Native (with Go and NDK), WebRTC, 
          To the gaming world: Shader scripter, Passing through a lot of things: IPFS, 
          Blender, Linux honeypots, ActivityPub....
        `} />
        <Member avatar="/static/dani.jpg" name="Daniel Ridao Marín" description={`
          Soy mongolo porque no tengo una descripcion por ningun lado, ni en github, ni en linkedin, ...
        `} />
      </div>
    );
  }
}




