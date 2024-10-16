import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
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
import { Trans } from 'react-i18next';


export const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          <Trans i18nKey="about.greeting" components={[<span className="about__name" key="0" />]} />
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          {t("about.description")}
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
            href="https://www.instagram.com/lautarodevelops/"
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

        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1-UxXZ8lHrkHE-knW6svPlXxumbTsyvuD/view?usp=sharing"
            );
          }}
        >
          {t("about.resume")}
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
