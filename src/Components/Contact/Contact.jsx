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
              href="asd@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:num" target="_blank" rel="noreferrer">
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
                <p>hjkhjkhjkhjk@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>num</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
