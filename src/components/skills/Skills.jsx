import React from "react";
import "./skills.css";
import logoCC from "../../assets/C++logo.png";
import DSA from "../../assets/DSA.png";
import CSS from "../../assets/CSS-Logo.png";
import JS from "../../assets/Jslogo2.jpg";
import reactjs from "../../assets/React.png";
import Leetcode from '../../assets/social.logo.png'

export const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I'am a skilled web developer with expertise in C-programming, C++,
        HTML,CSS, and JavaScript . Known for my problem-solving prowess, I have
        a strong grasp of Data Structures and Algorithms . This combination of
        technical skills and problem-solving ability allows me to create
        efficient, visually appealing websites and tackle complex development
        challenges with ease.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={CSS} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Cascading Style Sheet</h2>
            <p>Build many responsive website with CSS.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={JS} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>
              I am skilled in Javascript, which is a very popular language for
              developement
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={reactjs} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>ReactJs</h2>
            <p>
              I am skilled in reactJs. which helps in building single page
              application
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={DSA} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Data Structure and Algorithm</h2>
            <p>I have strong grasp of data structure and Algorithm</p>
            <div>
              <a href="https://leetcode.com/u/Legends_Loom/">
                <button className="leetcode">
                  <img src={Leetcode} alt="" className="leetcodeImg" />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="skillBar">
          <img src={logoCC} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C++</h2>
            <p>I have a good problem solving experience in C++ with DSA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
