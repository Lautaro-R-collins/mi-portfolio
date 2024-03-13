import React from "react";
import "./Footer.css";
import { ThemeContext } from "../../Context/theme";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";


export const Footer = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className={"section " + themename}>
      <div className="footerBox">
        <div className="footer-social">
          <div className="social-icons">
            <a
              href="https://github.com/Lautaro-R-collins"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/lautaro-r-collins/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-icon"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com/Lautarodevelops"
              target="_blank"
              rel="noreferrer"
              className="twitter-icon"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.instagram.com/lautarodevelops/"
              target="_blank"
              rel="noreferrer"
              className="instagram-icon"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-phrase">
          <p>
            Hecho en React con ayuda de ☕ © 2024 Lautaro Rodriguez Collins. 
          </p>
        </div>
      </div>
    </div>
  );
};

