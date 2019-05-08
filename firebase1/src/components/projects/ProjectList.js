import React from "react";
import ProjectSumamry from "./ProjectSummary";

const ProjectList = ({ projectsFromStore }) => {
  console.log(projectsFromStore);
  return (
    <div className="project-list section">
      {projectsFromStore &&
        projectsFromStore.map(project => {
          return <ProjectSumamry projectFromStore={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;
