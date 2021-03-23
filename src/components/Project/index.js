import React from "react";

function Project(props) {
  const { name, description } = props.data;
  return (
    <li>
      {name} - {description}
    </li>
  );
}

export default Project;
