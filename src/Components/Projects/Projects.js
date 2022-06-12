import React from "react";
import "./Projects.css";
import justeat from "./justeat.png";
import movie from "./movie.png";
import textutils from "./textutils.png";

const Projects = () => {
  return (
    <div className="container">
      <main className="grid">
        <article className="card">
          <img src={movie} alt="" />
          <div className="text">
            <h2>Movie Rating</h2>
            <p className="project-description">
               A movie rating app which helps us to search movie and details
              about that movie.  Axios is used for API calls,React Router DOM
              for Routing and NodeSASS for our SCSS compile to CSS . Built with{" "}
              <strong>React, </strong>
              <strong>Hooks</strong> and <strong>React router</strong>.
            </p>
            <a
              href="https://movie-rating-redux.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Live link
            </a>
            <a
              href="https://github.com/Utkarshraj007/movierating"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "blue",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Code Repository
            </a>
          </div>
        </article>
        <article className="card">
          <img src={justeat} alt="" />
          <div className="text">
            <h2>JustEat</h2>
            <p className="project-description">
              A food ordering web app built with <strong>React, </strong>{" "}
              <strong>Hooks </strong>
              and <strong>Bootstrap</strong>. It also has a demo payment
              feature that uses the <strong>Google Pay integration</strong> for
              React.
            </p>
            <a
              href="https://justeatapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Live link
            </a>
            <a
              href="https://github.com/Utkarshraj007/justeat"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "blue",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Code Repository
            </a>
          </div>
        </article>
        <article className="card">
          <img src={textutils} alt="" />
          <div className="text" style={{ marginTop: "13px" }}>
            <h2>TextUtils</h2>
            <p className="project-description">
              A simmple web app  built with <strong>React</strong>,{" "}
              <strong>Hooks</strong>, and <strong>Bootstrap</strong>{" "}
              that lets you perform various actions on the text entered in the text-box{" "}
            </p>
            <a
              href="https://textutilityappreact.netlify.app//"
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Live link
            </a>
            <a
              href="https://github.com/Utkarshraj007/textutils"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "blue",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              Code Repository
            </a>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Projects;
