import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-left: 130px;
  padding-right: 130px;
  border-top: 2px solid #d9d9d9;
  font-size: 20px;
  height: 100px;
  text-align: start;

  & h1 {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
  }

  & a {
    color: black;
    text-decoration-line: none;
  }

  & a:hover {
    color: #7ed188;
  }

  .linked-service {
    display: flex;
    gap: 30px;
    padding-right: 20px;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="service-name">
        <h1>핏핏</h1>
        <p>Contact backhay0714@naver.com</p>
        <p>Copyright PeteFit. All rights reserved</p>
      </div>
      <div className="linked-service">
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
