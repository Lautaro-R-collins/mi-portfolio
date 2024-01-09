import React from "react";
import { Trans } from 'react-i18next';
import "./Techstacks.css";
import { FaReact, FaNodeJs, } from "react-icons/fa";
import {
  SiHtml5,
  SiGit,
  SiExpress,
  SiFirebase,
  SiAngular,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiMui,
  SiMysql,
  SiFigma
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap } from "react-icons/bs";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title" style={{ marginTop: "2em" }}><Trans i18nKey="teckstacks" components={[<span className="different" key="0" />]} /></h2>
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
            <SiFigma />
            <h5>Figma</h5>
          </div>
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiAngular />
            <h5>Angular</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiMui />
            <h5>MUI</h5>
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
            <SiFirebase />
            <h5>Firebase</h5>
          </div>
          <div>
            <SiMysql />
            <h5>Mysql</h5>
          </div>
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <SiCsharp />
            <h5>C#</h5>
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
