import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  padding-left: 130px;
  padding-right: 130px;
  border-bottom: 2px solid #d9d9d9;
  height: 50px;
  font-size: 20px;
  text-align: center;

  & div {
    display: flex;
    gap: 15px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration-line: none;

  &:hover {
    color: #7ed188;
    text-decoration: underline;
  }
`;

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const logout = async () => {
    try {
      const response = await fetch("/api/logout", { credentials: "include" });
      if (response.ok) {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <StyledHeader>
      <div>
        <img src="../../img/logo.png" alt="핏핏로고" />
      </div>
      <div>
        <StyledLink to="/informations">정보목록</StyledLink>
        <StyledLink to="/board">커뮤니티</StyledLink>
        {!isLoggedIn ? (
          <StyledLink to="/login">Login</StyledLink>
        ) : (
          <button onClick={logout}>Logout</button>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
