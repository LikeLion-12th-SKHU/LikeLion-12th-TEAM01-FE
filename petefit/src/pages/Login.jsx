import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();
  const backendUrl = process.env.REACT_APP_API_URL; // 백엔드 URL
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = `http://localhost:3000/login/oauth2/code/google`; // 구글 로그인 리디렉션 URI
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email%20profile`;

    window.location.href = googleLoginUrl;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetch(`${backendUrl}/login/oauth2/code/google?code=${code}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            setUser({ email: data.email, name: data.name });
            setIsLoggedIn(true);
            setLoginStatus("로그인 성공!");
            navigate("/");
          } else {
            setLoginStatus("로그인 실패: " + data.message);
          }
        })
        .catch((error) => {
          setLoginStatus("Error: " + error.message);
        });
    }
  }, [navigate, setIsLoggedIn, setUser, backendUrl]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
      }}
    >
      <h1>Login</h1>
      <button onClick={handleLogin}>Google 로그인</button>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default Login;
