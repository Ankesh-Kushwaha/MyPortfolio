import React from 'react'
import './intro.css'
import bg from '../../assets/profile.png'
import { Link } from 'react-scroll'
import btnimg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello!</span>
        <span className="introText">
          I'm <span className="introName">Ankesh Kushwaha</span>
          <br />
          Fronted Developer
        </span>
        <p className="introPara">
             I am a skilled and passionate fronted developer with experience in creating visually appealing and user-friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnimg} alt=""  className="btnImg"/>
             Hire me
            </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro