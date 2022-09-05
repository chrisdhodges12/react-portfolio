import React from "react";
import Card from "react-bootstrap/Card";

function Projects() {
  const project = [
    {
      title: "Travel Size",
      description: "A blog to help you find where to travel!",
      github: "https://github.com/chrisdhodges12/Travel-Size-",
      deployed: "https://dry-refuge-26643.herokuapp.com/",
      src: require("../../assets/project-images/travel-size.png"),
    },
    {
      title: "What's for Dinner?",
      description: "An app to help you search for recipes.",
      github: "https://github.com/chrisdhodges12/Whats-for-dinner",
      deployed: "https://chrisdhodges12.github.io/Whats-for-dinner/",
      src: require("../../assets/project-images/whats-for-dinner.png"),
    },
    {
      title: "Budget Tracker",
      description:
        "A budget app that alows you to add/ subtract funds and view the data graphically --- Features offline capability. ",
      github: "https://github.com/chrisdhodges12/budget-tracker",
      deployed: "https://ancient-retreat-46441.herokuapp.com/",
      src: require("../../assets/project-images/budget-tracker.png"),
    },
    {
      title: "Tech Blog",
      description:
        "Utilizing MySQL database, a user can manipulate blog posts using GET, POST, PUT, and DELETE routes.",
      github: "https://github.com/chrisdhodges12/tech-blog",
      deployed: "https://obscure-stream-37468.herokuapp.com/",
      src: require("../../assets/project-images/tech-blog.png"),
    },
    {
      title: "Note Taker",
      description: "Create and save notes utilizing express.js",
      github: "https://github.com/chrisdhodges12/note-taker",
      deployed: "https://note-taker-app-ch.herokuapp.com/",
      src: require("../../assets/project-images/note-taker.png"),
    },
    {
      title: "Password Generator",
      description: "Generates a random secure password",
      github: "https://github.com/chrisdhodges12/password-generator-",
      deployed: "https://chrisdhodges12.github.io/password-generator-/",
      src: require("../../assets/project-images/password-generator.jpeg"),
    },
  ];

  return (
    <div>
      <h2> My Portfolio</h2>
      <div className="d-flex flex-wrap justify-content-lg-between justify-content-md-center justify-content-sm-center container">
        {project.map((project) => (
          <Card key={project.name} className="project-card col-sm-12 col-md-3 col-lg-4  " >
            <Card.Body className="project-body">
              <Card.Title className="project-title">{project.title}</Card.Title>
              <Card.Img className="project-image"  src={project.src} />
              <Card.Text className="project-text">{project.description}</Card.Text>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-github">
                GitHub Repo
              </a>{"   "}
              <a href={project.deployed} target="_blank" rel="noreferrer" className="project-deployed">
                See it in action!
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
