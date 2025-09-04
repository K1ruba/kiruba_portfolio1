import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KIRUBAKARAN A </span>
            from <span className="purple"> Karapakkam, Chennai, Tamil Nadu.</span>
            <br />
            Graduated in Biomedical Engineering from Dhanalakshmi Srinivasan Engineering College, Perambalur
            <br />
            <br />
            I am currently pursuing my internship as a DevOps Engineer Intern at HakunaMatata Solutions Pvt Ltd, Chennai.
            <br />
            <br />
            I have developed a strong interest in Cloud Computing and DevOps. I’ve gained hands-on experience with AWS, Docker, Kubernetes, CI/CD pipelines, and other DevOps tools through self-learning and project work
            <br />
            <br />
            I love solving real-world problems, finding smarter ways to automate things, and exploring new technologies that make work easier. I’m someone who adapts quickly, stays positive, and is always eager to learn. These qualities keep me motivated as I build my career in DevOps and cloud engineering
            <br />
            <br />
            Apart from automation, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring cloud technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">K1ruba</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
