import React, { useEffect } from "react";
import "./index.css";
import Resume from "./Files/resume.pdf";
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const sticky = navbar.offsetTop;
      if (window.pageYOffset > sticky) {
        document.getElementById("navbar").style.visibility = "visible";
        document.getElementById("navbar").style.opacity = "0";
        document.getElementById("navbar").style.animation =
          "fadeout 0.5s linear";
      } else {
        document.getElementById("navbar").style.opacity = "1";
        document.getElementById("navbar").style.animation =
          "fadein 0.5s linear";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="navbar" className={"sticky"}>
      <li id="navbar-name">Tyler King</li>
      <a href={Resume} target="_blank" className="navbar-a" rel="noreferrer">
        Resume
      </a>
    </header>
  );
};

export default Navbar;
