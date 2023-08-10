import ReactGA from "react-ga";
import Navbar from "./Navbar";
import Magic from "./Magic";
import Home from "./Home";
/* import Temp from "./Temp"; */
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  ReactGA.initialize("G-DEGNYRHPH3");
  ReactGA.pageview(document.location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/react-portfolio/magic" element={<Magic />} />
      </Routes>
    </>
  );
}

export default App;
