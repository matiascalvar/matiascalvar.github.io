import Contact from "../Contact/Contact";
import style from "./MainCard.module.css";

function MainCard() {
  return (
    <div className={style.card}>
      <h1 className={style.title}>
        Hello, I'm <br /> Matias Calvar.
      </h1>
      <p className={style.paragraph}>
        Software Developer.
        <br />
        <br />
        Passionate about technology, gaming, languages and constant learning.
      </p>

      <Contact />
      <ul className={style.menu}>
        <li>
          <div className={style.menuLine}></div>{" "}
          <a href="#project-section">Projects</a>
        </li>
        <li>
          <div className={style.menuLine}></div>{" "}
          <a href="#tech-section">Technologies</a>
        </li>
      </ul>
    </div>
  );
}

export default MainCard;
