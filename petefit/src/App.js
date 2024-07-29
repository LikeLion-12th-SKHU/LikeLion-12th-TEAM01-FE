import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MainPage from "./pages/main/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import Community from "./pages/community/Community";
import Information from "./pages/information/Information";
import Compete from "./pages/compete/compete";
import MyPage from "./pages/my/MyPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/informations" element={<Information />} />
        <Route path="/board" element={<Community />} />
        <Route path="/compete" element={<Compete />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function AppWithProvider() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
