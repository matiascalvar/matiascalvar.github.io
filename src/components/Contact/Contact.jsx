import { FaLinkedin, FaFilePdf, FaGithubSquare } from "react-icons/fa";
import style from "./Contact.module.css";
import CV from "../../assets/Matias-Calvar's-Resume-EN.pdf";

function Contact() {
  return (
    <div className={style.contact}>
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <span className={style.iconResume}>Resume</span>
      </a>
      <a
        href="https://www.linkedin.com/in/matiascalvar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={style.icon}>
          <FaLinkedin />
        </span>{" "}
        <span className={style.iconText}>LinkedIn</span>
      </a>
      <a
        href="https://github.com/matiascalvar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={style.icon}>
          <FaGithubSquare />
        </span>{" "}
        <span className={style.iconText}>GitHub</span>
      </a>
    </div>
  );
}

export default Contact;
