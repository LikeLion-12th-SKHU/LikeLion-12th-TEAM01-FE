import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #f7f7f7;

  h1 {
    margin-bottom: 40px;
  }
`;

const LoginButton = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #d9d9d9;
  background-color: #ffffff;
  font-size: 18px;

  &:hover {
    box-shadow: 0 6px 12px #d9d9d9;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();
  const backendUrl = process.env.REACT_APP_API_URL; // 백엔드 URL
  const [loginStatus, setLoginStatus] = useState(null);
  const [loginToken, setLoginToken] = useState({
    accessToken: "",
  });

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      getToken(code);
    }
  }, [navigate, setIsLoggedIn, setUser, backendUrl]);

  const getToken = async (authCode) => {
    try {
      const response = await axios.get(
        `${backendUrl}/login/oauth2/google?code=${authCode}`
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginDiv>
      <h1>Login</h1>
      <LoginButton onClick={handleLogin}>Google로 로그인</LoginButton>
      {loginStatus && <p>{loginStatus}</p>}
    </LoginDiv>
  );
};

export default Login;
