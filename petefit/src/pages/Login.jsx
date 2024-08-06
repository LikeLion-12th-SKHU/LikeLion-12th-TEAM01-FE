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
      navigate("/");
    }
  }, []);

  const getToken = async (authCode) => {
    try {
      const response = await axios.get(
        `${backendUrl}/login/oauth2/code/google?code=${authCode}`
      );

      const { accessToken, user } = response.data;

      // 로그인 성공 시 상태 업데이트
      setIsLoggedIn(true);
      setUser(user);

      // 토큰을 로컬 스토리지에 저장하거나 쿠키에 저장할 수 있음
      localStorage.setItem("accessToken", accessToken);

      setLoginStatus("로그인에 성공했습니다!");

      // 로그인 후 홈 페이지로 리디렉션
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoginStatus("로그인에 실패했습니다.");
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
