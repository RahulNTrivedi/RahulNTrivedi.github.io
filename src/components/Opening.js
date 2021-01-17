import React from 'react'
import "./stylings/Opening.css"
import Particles from "react-particles-js"

class Opening extends React.Component {
  render() {
    return(
      <div className="transition">
        <div className="background"></div>
        <Particles className="yikes"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 800,
                }
              },
              color: {
                value: "#FFFFFF"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000"
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600
                }
              }
            },
            }}
          width = "100vw"
          height = "100vh"
        />
      </div>);
  }
}
export default Opening;
