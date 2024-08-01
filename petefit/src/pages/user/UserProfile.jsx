import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice"; // setUser 액션 가져오기

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Redux 스토어에서 사용자 정보 가져오기
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    height: "",
    weight: "",
    gender: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nicknameError, setNicknameError] = useState("");

  // 이메일로 사용자 정보를 가져오는 함수
  const fetchUserInfoByEmail = useCallback(
    async (email) => {
      try {
        const response = await fetch(
          `/members/getMember?email=${encodeURIComponent(email)}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
        }

        const data = await response.json();
        setUserInfo(data);
        // 사용자 정보를 Redux 스토어에 저장
        dispatch(setUser(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  // 닉네임 중복 확인 함수
  const checkNickname = async () => {
    try {
      const response = await fetch(
        `/members/nickname?nickname=${encodeURIComponent(userInfo.nickname)}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("닉네임 중복 확인에 실패했습니다.");
      }

      const data = await response.json();
      if (data.isTaken) {
        setNicknameError("이미 사용 중인 닉네임입니다.");
      } else {
        setNicknameError("사용 가능한 닉네임입니다.");
      }
    } catch (error) {
      console.error("중복 확인 실패:", error);
      setNicknameError("중복 확인 중 오류가 발생했습니다.");
    }
  };

  // 컴포넌트가 마운트될 때 로그인한 사용자 이메일로 사용자 정보 가져오기
  useEffect(() => {
    if (user && user.email) {
      fetchUserInfoByEmail(user.email); // Redux에서 로그인한 사용자 이메일 사용
    } else {
      setLoading(false); // 사용자가 없으면 로딩 종료
    }
  }, [user, fetchUserInfoByEmail]); // fetchUserInfoByEmail 추가

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("mypage/onboarding", {
        method: "POST", // POST 메소드로 설정
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo), // 수정된 사용자 정보를 JSON 형식으로 전송
      });

      if (!response.ok) {
        throw new Error("사용자 정보 수정에 실패했습니다.");
      }

      const data = await response.json();
      console.log("수정된 정보:", data);
      alert("사용자 정보가 성공적으로 수정되었습니다.");
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  return (
    <div>
      <h2>기본 정보를 입력해주세요!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          닉네임:
          <input
            type="text"
            name="nickname"
            value={userInfo.nickname}
            onChange={handleChange}
          />
          <button type="button" onClick={checkNickname}>
            중복 확인
          </button>
          {nicknameError && <div style={{ color: "red" }}>{nicknameError}</div>}
        </label>
        <br />
        <label>
          키 (cm):
          <input
            type="number"
            name="height"
            value={userInfo.height}
            onChange={handleChange}
          />
        </label>
        <label>
          몸무게 (kg):
          <input
            type="number"
            name="weight"
            value={userInfo.weight}
            onChange={handleChange}
          />
        </label>
        <label>
          성별:
          <select name="gender" value={userInfo.gender} onChange={handleChange}>
            <option value="">선택하세요</option>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
            <option value="기타">기타</option>
          </select>
        </label>
        <br />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default UserProfile;
