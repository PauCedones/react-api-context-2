import React from "react";

function Project(props) {
  const { name, description, html_url } = props.data;
  return (
    <li>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={html_url}>Link</a>
    </li>
  );
}

export default Project;
