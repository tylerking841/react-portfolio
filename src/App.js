import ReactGA from "react-ga";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sections from "./sections";
function App() {
  ReactGA.initialize("G-DEGNYRHPH3");
  ReactGA.pageview(window.location.pathname);
  return (
    <div className="App">
      <body>
        <div>
          <Navbar />
        </div>
        <div>
          <p id="a">Welcome to my website</p>
          <p class="text">
            Welcome, I'm Tyler King and this is my online portfolio. Im a
            Software Developer and recently grduated from Algonquin College in
            Ottawa, Canada. My email, github, and linkedin are available at the
            bottom of the page. Feel free to contact me for any reason, even if
            its just to network.
          </p>
        </div>
        <h1>My Projects</h1>
        <Sections />

        <Footer />
      </body>
    </div>
  );
}

export default App;
