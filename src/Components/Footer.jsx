import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:lejolo20@gmail.com" className="footer__link">
        lejolo20@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/leonardo-lopez-9580a3b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/lejolo20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/@lejolo20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://wa.me/584244670346"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsappSquare} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
