import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          some of our <strong className="orange"> projects </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Text-Emotion Analysis"
              description="A rule-based and deep learning algorithms with an aim to first appropriately detect the different types of emotions contained 
              in a collection of English sentences or a large paragraph and then accurately predict the overall emotion of the paragraph."
              ghLink="https://github.com/titikshaha/Text_Emotion_Analysis"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hackathon Water Supply"
              description="The Indore Water Supply Management System tracks water distribution to households and uses machine learning to detect leaks and predict water scarcity. This system provides insights to enhance the efficiency and equity of Indore's water supply."
              ghLink="https://github.com/Aadarsh-Mourya/Water_Management_System-StackUpBros"
              demoLink="https://water-supply-management-3sdabtfkcdpcxq47nk97mp.streamlit.app/#household-data-for-ward-annapurna"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Your Dost"
              description="This project is an implementation of an online student counseling system designed to provide mental health and academic support to students of IIITDM Jabalpur. The system helps students and professional counselors by offering a secure and user-friendly platform."
              ghLink="https://github.com/Heisenberg1912/on-the-way-master?tab=readme-ov-file"
              demoLink="https://yourdost.com/"></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="artryst: Titiksha"
              description="A personal website designed to showcase artworks and writeups. It features a dynamic interface with smooth navigation and interactive components for an immersive user experience. The project is built using React and leverages modern practices."
              ghLink="https://github.com/titikshaha/artryst"
              demoLink="https://artryst.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio: Tushar"
              description="My portfolio showcases projects that blend technical innovation with creative problem-solving, including data-driven applications, web development, and AI-powered solutions.I’m passionate about exploring new technologies and building impactful solutions."
              ghLink="https://github.com/Heisenberg1912/portofolio1"
              demoLink="https://heisenberg1912.github.io/portofolio1/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
