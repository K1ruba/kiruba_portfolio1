import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a DevOps Engineer who loves turning complex systems into simple, automated solutions.
              <br />
              <br />I’ve gained hands-on experience with AWS and Azure and DevOps tools through self-learning and project work, and I enjoy simplifying complex concepts through clear documentation and presentations.
              <i>
                <b className="purple">  </b>
              </i>
              <br />
              <br />
              I enjoy automating processes,  &nbsp;
              <i>
                <b className="purple">optimizing workflows, and making deployments faster and more reliable </b>
                {" "}
                <b className="purple">
                  .
                </b>
              </i>
              <br />
              <br />
              I help ideas travel faster — from a developer’s laptop to production
              I don’t just write scripts <b className="purple">I build bridges between development and operations</b>
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; Behind every smooth deployment,
              <i>
                <b className="purple">there’s a bit of my work.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/K1ruba"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                {/* <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                > */}
                  {/* <AiOutlineTwitter /> */}
                {/* </a> */}
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/a-kirubakaran/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons"> */}
                {/* <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
