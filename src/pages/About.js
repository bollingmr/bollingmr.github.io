import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="text">
        <h1>About Me</h1>
        <p>
          I hold a bachelor's degree in computer science and am excited to kickstart my career as a
          web developer.
        </p>
        <p>
          I have solid experience with frontend technologies like HTML, CSS, and JavaScript, as well
          as React.js, enabling me to create responsive and user-friendly interfaces. On the
          backend, I have hands-on knowledge of SQL and PHP.
        </p>
        <p>
          Beyond technical skills, I’m committed to continuous learning and growth. I’m eager to
          contribute to a team where I can grow as a developer and bring value through my skills and
          dedication.
        </p>
      </div>
      <div className="image">
        <img
          src="/assets/working.svg"
          alt="Working illustration"
        />
      </div>
    </div>
  );
}

export default About;
