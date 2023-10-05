import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm"; 
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Mi <span className="different">Contacto</span>
        </h2>
        <div className="contactMain">
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          {/* Renderiza el componente del formulario */}
          <ContactForm />
        </div>
        <div className="mailNumber" data-aos="fade-right">
          <div>
            {/* Iconos y detalles de contacto */}
          </div>
          <div className="iconsCont">
            {/* Más iconos y detalles de contacto */}
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