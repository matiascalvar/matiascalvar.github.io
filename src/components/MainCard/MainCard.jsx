import Contact from "../Contact/Contact";
import style from "./MainCard.module.css";

function MainCard() {
  return (
    <div className={style.card}>
      <h1 className={style.title}>
        Hello, I'm <br /> Matias Calvar.
      </h1>
      <p className={style.paragraph}>
        I build fast, reliable interfaces for complex, data-intensive products.
        <br />
        <br />
        Over the past 5+ years, I’ve specialised in React, TypeScript and Next.js,
        with a focus on fintech, data visualisation and real-time applications.
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
