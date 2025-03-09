import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
         
            <br />
            Hi, I’m Titiksha!  I'm the one putting spin on your complex problems with my creative and analytical thinking. 
           <br/ > <br />Over the years, I’ve taken on leadership roles where I managed teams and projects, helping me in developing skills in organization and communication. 
            
            <br /> <br/>
            Beyond academics, I practice yoga to stay focused and mindful, which helps me maintain clarity in high-pressure situations. 
            I also have a creative side—writing and painting are my go-to outlets for expression. I regularly post on Pinterest and Instagram, always ahead in the trend-game.
            <br/>Creative writing, in particular, has honed my ability to think innovatively and approach challenges from different perspectives.
            <br/> <br/>
            "Where there's no creativity, logic won't be satisfactory!"

          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
