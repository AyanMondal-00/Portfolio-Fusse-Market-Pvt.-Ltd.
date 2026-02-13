import React from 'react'

const ProjectCard = ({ title, desc, category, image, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block border-l-4 border-blue-500 pl-4 py-3 hover:bg-gray-50 transition-colors"
    >
      <div className="flex gap-4 items-start">
        <img 
          src={image} 
          alt={title}
          className="w-24 h-24 object-cover rounded"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {desc}
          </p>
          <span className="text-xs text-blue-600 font-medium">
            {category}
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

