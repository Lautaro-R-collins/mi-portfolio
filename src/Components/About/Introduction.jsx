import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.jpeg";
import { Trans } from 'react-i18next';

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            <Trans i18nKey="about.title" components={[<span className="different" key="0" />]} />
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                <Trans i18nKey="description" components={[<span className="different" key="0" />]} />
              </h4>
              <h4><Trans i18nKey="lenguaje" components={[<span className="different" key="0" />]} /></h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                <Trans i18nKey="esp" components={[<span className="different" key="0" />]} />
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                <Trans i18nKey="ing" components={[<span className="different" key="0" />]} />
              </h4>      
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
