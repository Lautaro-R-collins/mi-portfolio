import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiHtml5,
  SiGit,
  SiExpress,


} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title"><span className="different">Tecnologias</span> y Herramientas</h2>
        <div className="techsection">
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Node.js</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express.js</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <BsWordpress />
            <h5>Wordpress</h5>
          </div>
          <div>
            <SiGit />
            <h5>Git</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};
