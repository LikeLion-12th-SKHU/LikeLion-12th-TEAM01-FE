import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice"; // setUser 액션 가져오기
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  font-weight: bold;
  height: 70vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 35px;
`;

const FormDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
`;

const Input = styled.input`
  width: 77%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  &:focus {
    border-color: #7ed188;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  &:focus {
    border-color: #7ed188;
    outline: none;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
  margin: 0 20px 20px 10px;
  display: flex;
  align-items: center;
`;

const ConfirmButton = styled.button`
  background-color: #bfbfbf;
  margin-left: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #a5a5a5;
  }
`;

const EditButton = styled.button`
  background-color: #7ed188;
  border: none;
  border-radius: 4px;
  padding: 10px 60px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #6db475;
  }
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user); // Redux 스토어에서 사용자 정보 가져오기
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    height: "",
    weight: "",
    gender: "",
  });
  const [selectedSupplements, setSelectedSupplements] = useState([]);
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

  const handleSupplementChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSupplements((prev) => [...prev, value]);
    } else {
      setSelectedSupplements((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("mypage/onboarding", {
        method: "POST", // POST 메소드로 설정
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInfo,
          supplementIds: selectedSupplements.join(","),
        }), // 수정된 사용자 정보를 JSON 형식으로 전송
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
    <Container>
      <Title>기본 정보를 입력해주세요!</Title>
      <form onSubmit={handleSubmit}>
        <Label>
          닉네임:
          <Input
            type="text"
            name="nickname"
            value={userInfo.nickname}
            onChange={handleChange}
          />
          <ConfirmButton type="button" onClick={checkNickname}>
            중복 확인
          </ConfirmButton>
          {nicknameError && <div style={{ color: "red" }}>{nicknameError}</div>}
        </Label>
        <br />
        <FormDiv>
          <Label>
            키 (cm):
            <Input
              type="number"
              name="height"
              value={userInfo.height}
              onChange={handleChange}
            />
          </Label>
          <Label>
            몸무게 (kg):
            <Input
              type="number"
              name="weight"
              value={userInfo.weight}
              onChange={handleChange}
            />
          </Label>
          <Label>
            성별:
            <Select
              name="gender"
              value={userInfo.gender}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="남성">남성</option>
              <option value="여성">여성</option>
              <option value="기타">기타</option>
            </Select>
          </Label>
        </FormDiv>
        <br />
        <Title>섭취하고 있는 영양제를 모두 체크해주세요!</Title>
        <FormDiv>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="1"
              onChange={handleSupplementChange}
            />
            없음
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="2"
              onChange={handleSupplementChange}
            />
            비타민D
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="3"
              onChange={handleSupplementChange}
            />
            비타민C
          </CheckboxLabel>
        </FormDiv>
        <FormDiv>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="4"
              onChange={handleSupplementChange}
            />
            칼슘
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="5"
              onChange={handleSupplementChange}
            />
            오메가3
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="6"
              onChange={handleSupplementChange}
            />
            마그네슘
          </CheckboxLabel>
        </FormDiv>
        <FormDiv>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="7"
              onChange={handleSupplementChange}
            />
            종합비타민
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="8"
              onChange={handleSupplementChange}
            />
            유산균
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="9"
              onChange={handleSupplementChange}
            />
            철분제
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="checkbox"
              value="10"
              onChange={handleSupplementChange}
            />
            기타
          </CheckboxLabel>
        </FormDiv>
        <br />
        <EditButton type="submit">수정하기</EditButton>
      </form>
    </Container>
  );
};

export default UserProfile;
