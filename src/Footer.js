import React from "react";
import Linkd from "./images/linkedin.png";
import Github from "./images/github.png";
import Email from "./images/email.png";
const Footer = () => {

  const copyEmail = () => {
    navigator.clipboard.writeText("tylerking841@gmail.com")
    alert("Email copied to clipboard");
  };

  return (
    <div class="footer">
      <a>
        <img
          src={Email}
          alt="email png"
          id="email-icon"
          onClick={copyEmail}
        />
      </a>
      <a
        href="https://github.com/tylerking841"
        target="_blank"
        rel="noreferrer"
      >
        <img id="github" alt="github" src={Github} />
      </a>
      <a
        href="https://www.linkedin.com/in/tylerkiingg"
        target="_blank"
        rel="noreferrer"
      >
        <img id="linkedin" alt="linkedin" src={Linkd} />
      </a>
    </div>
  );
};
export default Footer;
