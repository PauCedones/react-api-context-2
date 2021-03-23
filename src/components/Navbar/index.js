import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Navbar() {
  const { info } = useContext(UserContext);
  return (
    <nav>
      <h1>{info.name}</h1>
    </nav>
  );
}

export default Navbar;
