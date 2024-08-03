import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75vh;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
`;

const StyledGoogleLogin = styled(GoogleLogin)`
  width: 300px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px #d9d9d9;
  transition: box-shadow 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 6px 12px #d9d9d9;
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #666;
  margin-top: 15px;

  input {
    margin-right: 10px;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();
  const backendUrl = process.env.REACT_APP_API_URL;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container>
        <Title>Login</Title>
        <StyledGoogleLogin
          onSuccess={(credentialResponse) => {
            console.log("Google Login Success:", credentialResponse);

            const token = credentialResponse.credential;
            console.log("Token:", token); // 토큰 출력

            // GET 메서드로 요청을 보낼 때 Bearer 토큰을 Authorization 헤더에 포함
            fetch(`${backendUrl}/login/oauth2/code/google`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // Bearer 토큰을 Authorization 헤더에 포함
              },
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    `Network response was not ok, status: ${response.status}`
                  );
                }
                return response.json(); // JSON으로 응답 처리
              })
              .then((data) => {
                console.log("Data from server:", data);
                if (data.success) {
                  const userData = {
                    email: data.email,
                    name: data.name,
                  };
                  setUser(userData);
                  setIsLoggedIn(true);
                  navigate("/");
                } else {
                  console.error("Login failed:", data.message);
                }
              })
              .catch((error) => console.error("Error:", error));
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <RememberMe>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </RememberMe>
      </Container>
    </GoogleOAuthProvider>
  );
}
