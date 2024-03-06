import React from 'react';
import projects from './projectsData'; // Import dữ liệu dự án

const Projects = () => {
  return (
    <div>
      <h2>Dự Án Đã Triển Khai</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <img src={project.imageUrl} alt={project.name} style={{width: '100%', height: '200px', objectFit: 'cover'}} />
            <h3>{project.name}</h3>
            <p>{project.location}</p>
            <p>{project.status}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
