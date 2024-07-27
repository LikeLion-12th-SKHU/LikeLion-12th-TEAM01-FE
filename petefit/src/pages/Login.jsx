import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  return (
    <>
      <GoogleOAuthProvider clientId="54995240563-24muo48ifcdrt4is1jiq5r6tf6m9cudv.apps.googleusercontent.com">
        <div>
          <h1>Login</h1>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
              // 백엔드 서버로 토큰 전송
              const token = credentialResponse.credential;
              fetch(
                `https://kyulimcho.shop/api/auth/google?token=${encodeURIComponent(
                  token
                )}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
                .then((response) => response.json())
                .then((data) => {
                  console.log(data);
                  if (data.success) {
                    setIsLoggedIn(true);
                    navigate("/");
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
