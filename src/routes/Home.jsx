import ProjectSection from "../component/ProjectSection";
import Portfolio from "../pages/Portfolio.jsx";
import CollageCommunityPortfolio from "../pages/collageCommunityPortfolio.jsx";
import MobileAppPortfolio from "../pages/mobileAppPortfolio.jsx";
import Section1 from "../Sections/section1.jsx";
import Section2 from "../Sections/section2.jsx";

function Home() {
  return (
    <>
      <ProjectSection />
      <Portfolio />
      <CollageCommunityPortfolio />
      <MobileAppPortfolio />
      <Section1 />
      <Section2 />
    </>
  );
}

export default Home;