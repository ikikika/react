import React from "react";

const ProjectSummary = ({ projectFromStore }) => {
  const project = projectFromStore;
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gret-text text-darken">
        <span className="card-title">{project.title}</span>
        <p>
          POsted by: {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{project.content}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
