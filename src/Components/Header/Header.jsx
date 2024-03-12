import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../../Context/theme";
import "./Header.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

export const Header = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [showNavList, setShowNavList] = React.useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <header className={`header center ${themename}`}>

        <nav className={`center nav ${visible ? "" : "hide"}`}>
           <h3>
               <a href="#home" className="link logo">
                &lt;LRC/&gt;
               </a>
            </h3>
          <ul
            style={{ display: showNavList ? "flex" : null }}
            className="nav__list"
          >

            <li className="nav__list-item">
              <a
                href="#about"
                onClick={() => toggleNavList("#about")}
                className="link link--nav"
              >
                {t('about')}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#skills"
                onClick={() => toggleNavList("#skills")}
                className="link link--nav"
              >
                {t('skills')}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#projects"
                onClick={() => toggleNavList("#projects")}
                className="link link--nav"
              >
                {t('projects')}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#contact"
                onClick={() => toggleNavList("#contact")}
                className="link link--nav"
              >
                {t('contact')}
              </a>
            </li>
          </ul>
          
          <button
            type="button"
            onClick={() => window.open("https://drive.google.com/file/d/1UWZbCOywePBsSWGv1Hq1rx89Ib7MfzDM/view?usp=sharing", "_blank")}
            className="btn btn--icon nav__cv"
            aria-label="open CV"
            title="Ver mi CV"
            style={{ backgroundColor: "inherit" }}
          >
            <DescriptionOutlinedIcon />
          </button>

          <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
          </button>

          <button
            type="button"
            onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
            className="nav__language "
            aria-label="change language"
            style={{ backgroundColor: "inherit" }}
          >
            {i18n.language === 'es' ? 'English' : 'Español'}
          </button>

          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>
    </>
  );
};