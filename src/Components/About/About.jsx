import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
import { Timeline } from "./Timeline";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hola, soy <span className="about__name">Lautaro</span>.
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Apasionado del mundo de la programación y la tecnologia, soy un desarrollador de software
         en constante crecimiento y aprendizaje,
        tanto en mi ámbito profesional como personal.
        </p>
        <div className="about__contact center">
          <a
            href="https://www.linkedin.com/in/lautaro-rodr%C3%ADguez-collins-40505624a/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon style={{ fontSize: '1.7rem' }}/>
          </a>
          <a
            href="https://github.com/Lautaro-R-collins"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon style={{ fontSize: '1.7rem' }}/>
          </a>
          <a
            href="https://www.instagram.com/lautaro.develops/"
            aria-label="instagram"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon style={{ fontSize: '1.7rem' }}/>
          </a>
          <a
            href="https://www.twitter.com/lautarodevelops/"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon style={{ fontSize: '1.7rem' }}/>
          </a>
          <a
            href="mailto:lautarodevelops@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon style={{ fontSize: '1.7rem' }}/>
          </a>
          <a
            href="tel:+5492616908835"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon style={{ fontSize: '1.7rem' }}/>
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "poner link a cv con google drive"
            );
          }}
        >
          Currículum
        </button>
      </div>
      <Introduction />    
      <Timeline />
      <section id="#skills">       
        <Techstacks />
      </section>
    </>
  );
};
