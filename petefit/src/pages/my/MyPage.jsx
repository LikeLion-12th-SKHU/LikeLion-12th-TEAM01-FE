import React, { useEffect, useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import InformationList from "../../components/InformationList";
import "./my.css";

export default function MyPage() {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    height: "",
    weight: "",
    gender: "",
  });

  useEffect(() => {
    fetch("/mypage/getMember")
      .then((response) => response.json())
      .then((data) => {
        setProfileInfo({
          name: data.name,
          height: data.height,
          weight: data.weight,
          gender: data.gender,
        });
      })
      .catch((error) => {
        console.error("Error fetching profile info:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>프로필</h1>

      <main className="main">
        <div className="my_left">
          <section className="profile">
            <img
              src="/img/level1.png"
              alt="Profile"
              className="profile-image"
            />
            <div className="profile-info">
              <h3>{profileInfo.name}</h3>
              <p>키: {profileInfo.height} cm</p>
              <p>몸무게: {profileInfo.weight} kg</p>
              <p>성별: {profileInfo.gender}</p>
            </div>
          </section>

          <section className="calendar">
            <Calendar />
          </section>
        </div>
        <div className="my_right">
          <section className="status">
            <h2>나의 현황</h2>
            <div className="status-bar">
              <p>몸무게: 50.9 kg</p>
              <div className="progress-bar" style={{ width: "50%" }}></div>
            </div>
            <div className="status-bar">
              <p>물 섭취량: 1500 ml</p>
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <div className="status-bar">
              <p>섭취 칼로리: 1700 kcal</p>
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
            {/* 추가 상태 바 */}
          </section>

          <div className="my_bottom">
            <section className="meals">
              <h2>식단</h2>
              <div className="meal">
                <h3>아침</h3>
                <p>식사 내용</p>
              </div>
              <div className="meal">
                <h3>점심</h3>
                <p>식사 내용</p>
              </div>
              <div className="meal">
                <h3>저녁</h3>
                <p>식사 내용</p>
              </div>
            </section>

            <section className="stored-info">
              <h2>저장된 정보</h2>
              <InformationList />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
