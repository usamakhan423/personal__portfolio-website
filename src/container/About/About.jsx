import React from "react";

import { images } from "../../constant";
import "./About.scss";

const About = () => {
  return (
    <>
      <div id="about" className="container">
        <nav className="nav__container">
          <div className="profile__image">
            <img src={images.Profile} alt="Profile" />
          </div>
          <ul>
            <div className="links__btn">
              <ul>
                <li><a href="#about" className="js-scroll-trigger">About</a></li>
                <li><a href="#publications" className="js-scroll-trigger">Publications</a></li>
                <li><a href="#awards">Awards</a></li>
              </ul>
            </div>
          </ul>
        </nav>

        <div className="main__content-container">
          <div className="main__content-detail">
            <div className="user__personal-detail">
              <div className="user__identity">
                <h1>Anwar said</h1>
                <p>
                  Postdoctoral Research Scholar, Institute for Software
                  Integrated Systems, Department of Computer Science, Vanderbilt
                  University, Nashville, TN
                </p>
                <div className="user__documents">
                  <a href="#">anwarsaid135@gmail.com</a>
                  <a href="#" className="cv">
                    CV
                  </a>
                </div>
              </div>
            </div>
            <div className="user__social-links">
              <div className="image">
                <img src={images.google} alt="google" />
              </div>
              <div className="image">
                <img src={images.twitter} alt="twitter" />
              </div>
              <div className="image">
                <img src={images.linkedIn} alt="linkedin" />
              </div>
              <div className="image last__child">
                <img src={images.twitter} alt="twitter" />
              </div>
            </div>
          </div>

          <div className="user__description">
              <p>My research belongs to the area of graph machine learning (GML), which is an emerging field of research with extensive applications in various domains. In particular, I work on the algorithmic aspect of GML approaches to enhance their performance in terms of memory, computational complexity and accuracy using constructs from graph theory. I also work in network science and graph theory to design solutions for different real-world problems in different domains. More recently, I have expanded my research to the GML applications in electronic design automation and graph transformers.</p>
          </div>

          <div className="latest__update">
            <h1>Latest</h1>
            <ul>
              <li>Presented a poster entitled "Circuit Design Completion Using Graph Neural Networks" at VPA symposium (Oct 2022)</li>
              <li>Paper accepted at Computer Networks journal (Apr 2022)</li>
              <li>Joined Institute For Software Integrated Systems, Vanderbilt as a postdoc (March 2022)</li>
              <li>Defended my PhD Thesis (Nov 2021)</li>
              <li>Joined Build & Code as a Graph Research Scientist (August 2021)</li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
    </>
  );
};

export default About;
