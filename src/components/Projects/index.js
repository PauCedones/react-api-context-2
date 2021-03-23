import React, { useContext } from "react";
import Project from "../Project";
import UserContext from "../../context/UserContext";

function Projects() {
  const { repos } = useContext(UserContext);
  return (
    <ul>
      {repos.map((project, key) => {
        return <Project data={project} key={key} />;
      })}
    </ul>
  );
}

export default Projects;
