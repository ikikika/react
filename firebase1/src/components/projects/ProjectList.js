import React from "react";
import ProjectSumamry from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projectsFromStore }) => {
  console.log(projectsFromStore);
  return (
    <div className="project-list section">
      {projectsFromStore &&
        projectsFromStore.map(project => {
          return (
            <Link to={"/project/" + project.id} key={project.id}>
              <ProjectSumamry projectFromStore={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
