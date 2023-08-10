import React from "react";
import Footer from "./Footer";
import Sections from "./sections";

const Home = () => {
  
  return (
    <body>
      <div>
        <p id="a">Welcome to my website</p>
        <p class="text">
          Welcome, I'm Tyler King and this is my online portfolio. I'm a
          Software Developer and I recently graduated from Algonquin College in
          Ottawa, Canada. My Email, Github, and Linkedin are available at the
          bottom of the page. Feel free to contact me for any reason, even if
          its just to network.
        </p>
      </div>
      <Sections />
      <Footer />
      {}
    </body>
  );
};
export default Home;
