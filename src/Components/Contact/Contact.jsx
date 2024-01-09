import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import { FaLinkedin } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import ContactForm from "./ContactForm"; 
import { Trans } from 'react-i18next';


export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section" >       
        <h2 className="section__title" >
          <Trans i18nKey="conta" components={[<span data-aos="fade-right" className="different" key="1" />]} />
        </h2>
        <div className="contactMain">
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          {}
        <ContactForm />
        </div>
        <div className="mailNumber" data-aos="fade-right">
          <div>
            {}
          </div>
          <div className="iconsCont">
            {}
          </div>
        </div>
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/lautaro-rodr%C3%ADguez-collins-40505624a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="lautarodevelops@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+5492616908835" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            <a
              href="https://github.com/Lautaro-R-collins"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/L4UT1"
              target="_blank"
              rel="noreferrer"
            >
              <FaHackerrank className="Hackerrank" />
            </a>
            <a
              href="https://es.stackoverflow.com/users/334787/l4ut1"
              target="_blank"
              rel="noreferrer"
            >
              <FaStackOverflow className="StackOverflow" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>lautarodevelops@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+54 9 261 690-8835</p>
              </span>             
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
