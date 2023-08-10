import ReactGA from "react-ga4";
import Navbar from "./Navbar";
import Magic from "./Magic";
import Home from "./Home";
/* import Temp from "./Temp"; */
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  ReactGA.initialize("G-DEGNYRHPH3");
  

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
