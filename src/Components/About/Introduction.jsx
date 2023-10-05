import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            Sobre <span className="different">Mi</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hola, mi nombre es{" "}
                <span className="different">Lautaro Rodriguez Collins </span> soy de Argentina. 
                Mi pasión por la tecnología y la programación surgió mientras cursaba una Tecnicatura Universitaria en Producción y Automatización,
                 donde tuve mi primer contacto con el mundo de la programación. 
                 Motivado por la curiosidad, continué mi formación, en una Tecnicatura de grado Universitaria enfocada 
                 en el <span className="different">desarrollo de software</span>, además de participar en diversos cursos y aprender de forma autodidacta. 
                 Siempre estoy comprometido con un constante crecimiento y mejora en mi habilidades.
                  Actualmente, me dedico al <span className="different"> desarrollo de software full-stack</span>,
                   con un enfoque especializado en el <span className="different"> front-end</span>.
              </h4>
              <h4><span className="different">Idiomas :</span></h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Español {" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Ingles{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
