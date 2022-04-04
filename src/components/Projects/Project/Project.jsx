import { FaGithubSquare, FaChrome } from "react-icons/fa";
import style from "./Project.module.css";

function Project({ name, tech, description, urls }) {
  return (
    <div className={style.card}>
      <h1>{name}</h1>
      <p>{description}</p>
      <p className={style.techlist}>{tech}</p>
      <div className={style.links}>
        <a href={urls[0]} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
        <a href={urls[1]} target="_blank" rel="noopener noreferrer">
          <FaChrome />
        </a>
      </div>
    </div>
  );
}

export default Project;
