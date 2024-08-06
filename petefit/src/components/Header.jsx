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

const LogoLink = styled(Link)`
  padding-left: 20px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration-line: none;
  width: 70px;
  display: flex;
  align-items: center;

  &:hover {
    color: #7ed188;
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  background-color: rgb(155, 231, 164);
  border: 1px solid #d9d9d9;
  border-radius: 5px;
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
        <LogoLink to="/">
          <img
            src="../../img/logo.png"
            alt="핏핏로고"
            style={{ width: "100px", height: "50px" }}
          />
        </LogoLink>
      </div>
      <div>
        <StyledLink to="/informations">정보목록</StyledLink>
        <StyledLink to="/board">커뮤니티</StyledLink>
        {!isLoggedIn ? (
          <StyledLink to="/login">로그인</StyledLink>
        ) : (
          <>
            <StyledLink to="/compete">대결랭킹</StyledLink>
            <LogoutButton onClick={logout}>로그아웃</LogoutButton>
            <StyledLink to="/mypage">
              <img src="../../img/profile.png" alt="profile" />
            </StyledLink>
          </>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
