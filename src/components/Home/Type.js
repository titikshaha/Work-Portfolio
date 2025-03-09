import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Development",
          "Freelancing",
          "MERN Stack Development",
          "Open Source Contributors",
          "Machine Learning",
          "Content Management",
          "Search Engine Optimization",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
