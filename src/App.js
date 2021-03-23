import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Avatar from "./components/Avatar";
import styled from "styled-components";
import { UserProvider } from "./context/UserContext";

const AppStyled = styled.main`
  background: aquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
      <AppStyled>
        <Avatar />
        <Navbar />
        <Bio />
        <Projects />
      </AppStyled>
    </UserProvider>
  );
}

export default App;
