import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import MainPage from "./pages/main/MainPage";
import { AuthProvider } from "./contexts/AuthContext";
import Community from "./pages/community/Community";
import CommunityPost from "./pages/communityPost/CommunityPost";
import Information from "./pages/information/Information";
import Compete from "./pages/compete/compete";
import MyPage from "./pages/my/MyPage";
import UserProfile from "./pages/user/UserProfile";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/oauth2/code/google" element={<Login />} />
          <Route path="/informations" element={<Information />} />
          <Route path="/board" element={<Community />} />
          <Route path="/board/write" element={<CommunityPost />} />
          <Route path="/compete" element={<Compete />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/onboarding" element={<UserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default function AppWithProvider() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
