import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import workImg from "../../Assets/work2.png";
import duoImg from "../../Assets/duo.png";
// import myImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                
              </h1>
              <h1 className="heading-name">
                we're
                <strong className="main-name"> Titiksha & Tushar </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }} >
            <img src={workImg} alt="about" className="blog-top" />
            </Col>

            
           
              
              </Row>
            </Container>
          
          
            <Container>
              <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.8em" }}>
                we're the<span className="orange"> byte & brush  </span> duo
              </h1>
              <p className="home-about-body">
              We don’t just code—we create, refine, and elevate. 
              Whether it’s building sleek, user-friendly websites, optimizing online visibility, 
              or crafting compelling content, we bring innovation and precision to every project.
                <br />
                <br />With expertise in 
                <i>
                  <b className="orange"> Full Stack Development, Content Management, SEO, Technical Support </b>
                </i>, we bridge the gap between logic and artistry.
                <br />
                <br />
                Everything you need to build, optimize, and refine your digital presence.&nbsp;
                <i> <br/>
                  
                </i>
              
                <br />
                We also apply our passion for developing
                products with <b className="orange"><br/>Machine Learning </b> &
                <i>
                  <b className="orange"> Artifical Intelligence </b>
                </i>
                &nbsp;
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={duoImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          {/* <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="orange">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/soumyajit4419/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/soumyajit4419"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row> */}
        </Container>
      </Container>
    </section>
  );
}

export default Home;