import ProjectCard from "../component/ProjectCard";
import collageComnityProject from "../data/collageComnityProject";
const CollageCommunityPortfolio = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-blue-500 pb-3">
          College & Community Platforms
        </h2>
        <div className="space-y-4">
          {collageComnityProject.map((item) => (
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
  );
};

export default CollageCommunityPortfolio;