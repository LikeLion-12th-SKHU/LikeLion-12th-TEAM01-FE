import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const backendUrl = process.env.REACT_APP_API_URL;
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <div>
          <h1>Login</h1>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google Login Success:", credentialResponse);

              // 백엔드 서버로 토큰 전송
              const token = credentialResponse.credential;
              fetch(`${backendUrl}/login?token=${encodeURIComponent(token)}`, {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => {
                  console.log("Response from server:", response);
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  return response.json();
                })
                .then((data) => {
                  console.log("Data from server:", data);
                  if (data.success) {
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
        </div>
      </GoogleOAuthProvider>
    </>
  );
}
