import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Bio() {
  const data = useContext(UserContext);
  return (
    <>
      <p>{data.info.bio}</p>
    </>
  );
}

export default Bio;
