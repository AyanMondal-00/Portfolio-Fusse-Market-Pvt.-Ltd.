import ProjectCard from "../component/ProjectCard";
import Projects from "../data/Projects";

const Portfolio = () => {
  return (
    <section className="bg-[#f9fafb] py-18">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-semibold mb-12 text-[#4b4bd4]">
        Company Websites
      </h2>

      {/* GRID CONTAINER */}
      <div
        className="
        max-w-6xl mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        gap-8
        px-6
      "
      >
        {Projects.map((item) => (
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
    </section>
  );
};

export default Portfolio;
