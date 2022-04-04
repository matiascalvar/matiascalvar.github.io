import style from "./Projects.module.css";
import Project from "./Project/Project";
import Tech from "./Tech/Tech";

function Projects() {
  const listOfProjects = [
    {
      name: "Medical Hub",
      description:
        "A SPA for a fictional medical center that allows patients to have an account, make and pay appointments, as well as access to their medical records. It also has medic and admin panels.",
      technologies: [
        "• Javascript, React, Redux, Nodejs, TypeScript, Mercado Pago, PostgreSQL",
      ],
      urls: [
        "https://github.com/matiascalvar/medical-hub-pf",
        "https://medicalhub.netlify.app/",
      ],
    },
    {
      name: "Dogs App",
      description:
        "A SPA where you can see more than 160 dogs breeds and filter, order, and even add new ones.",
      technologies: [
        "• Javascript, React, Redux, Nodejs, Responsive Design, Expressjs, PostgreSQL",
      ],
      urls: [
        "https://github.com/matiascalvar/PI-Dogs-main",
        "https://dogs-pi-spa.netlify.app/",
      ],
    },
    {
      name: "Todo",
      description:
        "A simple SPA where you can add new folders and todos, mark them as completed and delete them. The backend was made following a three layer architecture (service, module, controller).",
      technologies: [
        "• Javascript, React, Nestjs, Nodejs, TypeORM, Responsive Design",
      ],
      urls: [
        "https://github.com/matiascalvar/challenge",
        "https://todos-nestjs.netlify.app/",
      ],
    },
    {
      name: "Museum of Coffee",
      description:
        "A fictional website for a Museum of Coffee using Bootstrap but trying to get the less bootstrap appearance possible.",
      technologies: ["Javascript, Bootstrap, Responsive Design"],
      urls: [
        "https://github.com/matiascalvar/Museum-of-Coffee",
        "https://matiascalvar.github.io/Museum-of-Coffee/",
      ],
    },
    {
      name: "Landing Page",
      description:
        "A landing page for a fictional product: el mate definitivo. Made as a FreeCodeCamp project.",
      technologies: ["• Javascript, Bootstrap, Responsive Design"],
      urls: [
        "https://github.com/matiascalvar/landing-page",
        "https://matiascalvar.github.io/landing-page/",
      ],
    },
  ];

  return (
    <div className={style.card}>
      <h1 id="project-section">Projects</h1>
      {listOfProjects.map((project, index) => (
        <Project
          name={project.name}
          description={project.description}
          key={index}
          tech={project.technologies}
          urls={project.urls}
        />
      ))}
      <p className={style.seeMore}>
        See more projects on my{" "}
        <a
          href="https://github.com/matiascalvar?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
      <h1 id="tech-section">Technologies</h1>
      <Tech />
    </div>
  );
}

export default Projects;
