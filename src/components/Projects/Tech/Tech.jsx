import style from "./Tech.module.css";
import { SiTypescript, SiNestjs } from "react-icons/si";
import {
  DiJsBadge,
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiPostgresql,
} from "react-icons/di";

function Tech() {
  return (
    <div className={style.card}>
      <div className={style.tech}>
        <div className={style.icon}>
          <DiJsBadge />
          <p>JavaScript</p>
        </div>
        <div className={style.icon}>
          <DiReact />
          <p>Reactjs</p>
        </div>
        <div className={style.icon}>
          <DiNodejsSmall />
          <p>Nodejs</p>
        </div>
        <div className={style.icon}>
          <DiPython />
          <p>Python</p>
        </div>
        <div className={style.icon}>
          <DiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div className={style.icon}>
          <SiTypescript />
          <p>Typescript</p>
        </div>
        <div className={style.icon}>
          <SiNestjs />
          <p>Nestjs</p>
        </div>
      </div>
      <div>
        <p>API Rest, MongoDB, Redux, Postman, SCRUM, Git, Bootstrap</p>
      </div>
    </div>
  );
}

export default Tech;
