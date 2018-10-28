import React from "react";
import Member from '../components/Member'
import Game from '../components/Game'

const s = {
  avatarContainer: {
    display: "flex",
    justifyContent: 'space-evenly'
  },
  game: {

  }
}

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div style={s.avatarContainer}>
          <Member avatar="/static/jairo.jpg" name="Jairo Caro-Accino Viciana" description={`
          Full Stack From the web world: ReactJS & React Native (with Go and NDK), WebRTC, 
          To the gaming world: Shader scripter, Passing through a lot of things: IPFS, 
          Blender, Linux honeypots, ActivityPub....
        `} />
          <Member avatar="/static/dani.jpg" name="Daniel Ridao Marín" description={`
          No tengo una descripcion por ningun lado, ni en github, ni en linkedin, ...
        `} />
        </div>
        <div style={s.game}>
          <Game
            title="The World Devourer"
            description={`The Wolrd Devourer is a game developed for the Ludum Dare 42. The theme 
            for this jam was "Running out of Space" which was, for us, a literal understand of 
            what running out of space means. So, we decided to implemend a game with a top view 
            of an alien monster, The World Devourer, that will run nonstop to eat his preys. When 
            eating, the Devourer will grow up, increasing his length. The problem is that his 
            natural habitat are caves in a unexplored World where humans just arrived.`}
            controls="Left and Right arrow to move, Up to accel, Down to slow."
            url="https://worm.kidandcat.me" />
        </div>
        <div style={s.game}>
          <Game
            title="The Ass Invasion"
            description="A game made in 10 hours"
            controls="Arrows to move and Enter to shot. Second player, WASD and Space to shot"
            url="https://theassinvasion.com" />
        </div>
      </div>
    );
  }
}




