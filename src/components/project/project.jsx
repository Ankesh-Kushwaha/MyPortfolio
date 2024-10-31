import React from 'react'
import './project.css'
import amazon from '../../assets/amazon.png'
import goo from '../../assets/Google-gemini.png'
import rock from '../../assets/rock.png'

const Project = () => {
  return (
    <div id="projects" className="Main">
      <div className="heading">
        <h2>Projects</h2>
        <p>
          This section features a collection of personal projects—passions and
          explorations that have allowed me to hone my skills and expand my
          creative boundaries. Each project reflects my dedication to learning,
          experimenting, and growing as a creator. I hope they inspire as much
          as they challenged and taught me.
        </p>
      </div>

      <div className="projects">
        <div className="project">
          <h3>Amazon-Clone</h3>
          <img src={amazon} alt="" className="image" />
          <p>
            A simple amazon clone made with HTML,CSS,Javascript. it load data
            from a remote server and display it it have a cart feature where you
            can add and remove item.
          </p>
          <a href="https://ankesh-kushwaha.github.io/Amazon-Repo/">
            <button className="Btn">Check it out !</button>
          </a>
        </div>

        <div className="project">
          <h3>Google-gemini Clone</h3>
          <img src={goo} alt="" className="image" />
          <p>
            The project highlights my skills in component-based design, state
            management, and creating seamless user experiences in React.
          </p>
          <a href=" https://ankesh-kushwaha.github.io/Google-gemini/">
            <button className="Btn">Check it out !</button>
          </a>
        </div>

        <div className="project">
          <h3>Rock-Paper-Scissors Game</h3>
          <img src={rock} alt="" className="image" />
          <p>
            This Rock Paper Scissors game, developed with HTML, CSS, and
            JavaScript, offers an interactive, responsive interface for a
            classic game experience.
          </p>
          <a href=" https://ankesh-kushwaha.github.io/rock-paper-scissor-updated/">
            <button className="Btn">
              {" "}
              <span>Check it out !</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;