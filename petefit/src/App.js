import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MainPage from "./pages/main/MainPage.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import Community from "./pages/community/Community";
import Information from "./pages/information/Information";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/informations" element={<Information />} />
        <Route path="/board" element={<Community />} />
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
