import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <h1>Hi, I'm Michael.</h1>
        <p>Welcome to my portfolio website!</p>
        <p>
          As a computer science graduate with a strong foundation in web development, I specialize
          in creating clean, functional, and visually engaging websites. Thank you for stopping by!
        </p>
      </div>
      <div className="image">
        <img
          src="/assets/hello.svg"
          alt="Hello illustration"
        />
      </div>
    </div>
  );
}

export default Home;
