import React from "react";
import "./Projects.css";
import Quoteslide from "./Quoteslide"; 
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
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
                    src="https://camo.githubusercontent.com/02958a659da8099c0d9f8c26dbfc7aa52cc75fb5e855ebd037d0d434b561af8a/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f46342d4e485876574d4141543354483f666f726d61743d6a7067266e616d653d736d616c6c"
                    alt="Pixel Art"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Pixel Art</h2>
                <p>
                  Aplicacion Web para crear Pixel Art donde puedes modificar el tamaño del pixel
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
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
                    src="https://pbs.twimg.com/media/F7ucsbdXEAAguxw?format=jpg&name=small"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Encuestas</h2>
                <p>
                  Generador de encuestas online
                </p>
                <div>
                  <SiMongodb />
                  <SiExpress />
                  <FaReact />
                  <SiNodedotjs />
                </div>
                <div>
                  <a
                    href="asd"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/encuesta-backend.git"
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
                    src="https://pbs.twimg.com/media/F7umYT3WEAAFEbP?format=jpg&name=small"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sing up Padify</h2>
                <p>
                  Formulario de registro responsive Frontend echo con HTML, CSS y JS.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://lautaro-r-collins.github.io/Sing-up/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      {t("verpag")} 
                    </span>
                  </a>
                  <a
                    href="https://github.com/Lautaro-R-collins/Sing-up.git"
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
                    src="https://pbs.twimg.com/media/F7uprIBWkAEnmbZ?format=jpg&name=small"
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
                  <DiCss3 />
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

