// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Navbar from "./component/Navbar.jsx";
// import Footer from "./component/Footer.jsx";
// import ProjectSection from "./component/projectSection.jsx";
// import Portfolio from "./pages/Portfolio.jsx";
// import CollageCommunityPortfolio from "./pages/collageCommunityPortfolio.jsx";
// import MobileAppPortfolio from "./pages/mobileAppPortfolio.jsx";
// import Section1 from "./Sections/section1.jsx";
// import Section2 from "./Sections/section2.jsx";
// function App() {
//   return (
//      <>
//       <Navbar />
//       <ProjectSection />
//       <Portfolio />
//       <CollageCommunityPortfolio />
//       <MobileAppPortfolio />
//       <Section1 />
//       <Section2 />
//       <Footer />
//  </>
//   )
// }

// export default App;






import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;