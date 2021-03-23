import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import { UserProvider } from "./context/UserContext";

function App() {
  const [gitHubData, setGitHubData] = useState({});
  const [reposData, setReposData] = useState([]);
  useEffect(() => {
    const gitHubData = fetchData(
      "http://api.github.com/users/paucedones",
      setGitHubData
    );
    const reposData = fetchData(
      "http://api.github.com/users/paucedones/repos",
      setReposData
    );

    console.log(gitHubData, reposData);
  }, []);

  async function fetchData(url, setter) {
    const getData = await fetch(url);
    const json = await getData.json();

    setter(json);
  }
  const contextData = {
    info: gitHubData,
    repos: reposData,
  };

  return (
    <UserProvider value={contextData}>
      <Navbar />
      <Bio />
      <Projects />
    </UserProvider>
  );
}

export default App;
