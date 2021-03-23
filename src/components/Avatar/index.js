import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../context/UserContext";

const AvatarStyled = styled.main`
  .avatar {
    margin-top: 50px;
    border-radius: 25px;
    width: 150px;
  }
`;

function Avatar() {
  const { info } = useContext(UserContext);
  return (
    <AvatarStyled>
      <img className="avatar" src={info.avatar_url} alt={info.name} />
    </AvatarStyled>
  );
}

export default Avatar;
