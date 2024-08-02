import Calendar from "../../components/calendar/Calendar";
import "./my.css";

export default function MyPage() {
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
              <h3>인생은 즐거워</h3>
              <p>키: 163 cm</p>
              <p>몸무게: 53 kg</p>
              <p>성별: 여자</p>
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
              <div className="info-item">
                <h3>칼슘</h3>
                <p>좋아요: 54</p>
              </div>
              <div className="info-item">
                <h3>Leg Press 올바른 사용법</h3>
                <p>좋아요: 68</p>
              </div>
              {/* 추가 정보 */}
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
