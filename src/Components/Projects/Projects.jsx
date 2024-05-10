import React from "react";
import "./Projects.css";
import Quoteslide from "./Quoteslide"; 
import { FaReact } from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { Trans } from 'react-i18next';
import { useTranslation } from "react-i18next";



export const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          <Trans i18nKey="proylau" components={[<span className="different" key="0" />]} />
        </h2>

        <div className="allProjects">

        <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GLgdUdlXoAAq22d?format=jpg&name=small"
                    alt="Meet"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Video call app</h2>
                <p>
                You can log in, create meetings, and access features like recording,
                scheduling meetings,
                screen sharing, and managing participants.
                </p>
                <div>
                  <SiNextdotjs />
                  <SiTypescript />
                  <SiTailwindcss />                 
                </div>
                <div>
                  <a
                    href="https://meet-app-eta.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/meet-app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("vercod")} 
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GLjqUteXwAA9E-1?format=jpg&name=small"
                    alt="Planify"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PlaniFy</h2>
                <p>
                An app akin to Trello, featuring drag-and-drop functionality for organizing tasks on customizable boards + Pomodoro timer.
                </p>
                <div>
                  <FaReact />
                  <SiVite />
                  <SiTypescript />                 
                  <SiTailwindcss /> 
                </div>
                <div>
                  <a
                    href="https://planify-1tu6.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/PlaniFy-organization-app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("vercod")}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GIfC0A3WYAAKSeS?format=png&name=small"
                    alt="Pixel Art"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pixel Art</h2>
                <p>
                  Entretenida aplicacion Web para crear arte con pixel echa con JS
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <IoLogoJavascript />                 
                </div>
                <div>
                  <a
                    href="https://lautaro-r-collins.github.io/Pixel-Art/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/Pixel-Art.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("vercod")} 
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>


          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GNMQcNCXYAAeBNx?format=jpg&name=small"
                    alt="Vegna"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Vegna web page</h2>
                <p>
                Desarrollo el front-end de una página web dedicada al comercio electrónico y al desarrollo web.
                </p>
                <div>
                  <FaReact />
                  <SiVite />
                  <SiJavascript />                 
                  <SiTailwindcss /> 
                </div>
                <div>
                  <a
                    href="https://vegna-tech.onrender.com//"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GIfCTX1WIAAeWqQ?format=png&name=small"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pierdra papel y tijeras</h2>
                <p>
                  EL juego clasico piedras papel y tijeras echo con JS
                </p>
                <div>
                  <SiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://lautaro-r-collins.github.io/odin-Rock-Paper-Scissors/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/odin-Rock-Paper-Scissors.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                       {t("vercod")}
                    </span>
                  </a>
                </div>               
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://pbs.twimg.com/media/GIfEoHDXsAAww5H?format=jpg&name=small"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>weather app</h2>
                <p>
                  App web para consultar el tiempo en cualquier cuidad
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <IoLogoJavascript />  
                </div>
                <div>
                  <a
                    href="https://lautaro-r-collins.github.io/weather-app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("vercod")}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="center-button-container">
        <a
        href="https://github.com/Lautaro-R-collins"
        target="_blank"
        rel="noreferrer"
         >
        <div data-aos="fade-right"><span  className="btns onbt onbt ">{t("vermas")} </span></div>     
        </a>       
       </div>
        <Quoteslide />
    </>   
  );  
};

