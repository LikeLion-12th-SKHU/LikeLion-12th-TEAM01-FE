import React from "react";
import styled from "styled-components";

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

  & a {
    color: black;
    text-decoration-line: none;
  }

  & a:hover {
    color: #7ed188;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src="../../img/logo.png" alt="핏핏로고" />
      </div>
      <div>
        <a href="#">정보목록</a>
        <a href="#">커뮤니티</a>
        <a href="#">회원가입</a>
        <a href="#">로그인</a>
      </div>
    </StyledHeader>
  );
};

export default Header;
