import React from 'react'

const ProjectCard = ({ title, desc, category, image, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <div className="bg-white rounded-xl shadow-md overflow-hidden
                      transition-all duration-300
                      hover:-translate-y-2 hover:shadow-xl h-full">
        
        {/* Image */}
        <img 
          src={image} 
          alt={title}
          className="h-40 w-full object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            {desc}
          </p>

          <span className="inline-block mt-4 text-2.5xl text-blue-500 font-medium">
            ● {category}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

