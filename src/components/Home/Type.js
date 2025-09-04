import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "DevOps Engineer (Junior / Associate / Trainee)",
          "Cloud Engineer (AWS / Azure)",
          "Site Reliability Engineer (SRE)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
