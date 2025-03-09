import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Aboutcard2 from "./AboutCard2";
import Toolstack from "./Toolstack";
import meIMG from "../../Assets/image1.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* First Section: AboutCard1 and AboutCard2 (Side by Side) */}
        <Row className="align-items-center my-5">
          <Col md={6}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="orange">Titiksha Yadav</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "0px" }}>
              <strong className="orange">Tushar Batham</strong>
            </h1>
            <Aboutcard2 />
          </Col>
        </Row>

        {/* Single Image Below Both Cards */}
        <Row className="justify-content-center my-4">
          <Col md={5} className="text-center">
            <img src={meIMG} alt="About Me"  className="img-fluid w-10" // Increases size
          style={{ maxWidth: "500px" , alignItems: "center"}} />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="orange">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="orange">Tools</strong> we use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
