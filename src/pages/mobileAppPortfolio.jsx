import mobileApp from "../data/mobileApp";
import ProjectCard from "../component/ProjectCard";
const MobileAppPortfolio = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-3">
          Mobile App
        </h2>
        <div className="space-y-4">
          {mobileApp.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              category={item.category}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );}

export default MobileAppPortfolio;
