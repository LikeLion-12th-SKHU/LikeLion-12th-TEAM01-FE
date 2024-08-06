import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoDetail = styled.div`
  display: grid;
  align-items: center;
  margin-top: 60px;
  width: 1300px;

  hr {
    height: 0.5px;
    width: 1300px;
    background-color: #000000;
  }
`;

export const Category = styled.h4`
  color: #888888;
  text-align: center;
  padding-top: 12px;
  font-size: 23px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  background-color: #e7e7e7;
  width: 150px;
  height: 32px;
  margin-left: 23px;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  margin-left: 23px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  font-size: 23px;
  margin-top: 15px;
  justify-content: space-between;
`;

export const Writer = styled.h4`
  font-size: 20px;
  margin-left: 23px;
`;

export const Date = styled.h3`
  font-size: 22px;
  margin-right: 23px;
`;

export const CountWrapper = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: auto;
  margin-bottom: 30px;
`;

export const Views = styled.h5`
  display: flex;

  div {
    margin-right: 10px;
  }

  .viewsCount {
    margin-top: 3px;
  }
`;

export const Recommend = styled.h5`
  display: flex;
  margin-left: 10px;

  div {
    margin-bottom: 2px;
    margin-right: 10px;
  }

  .recommendCount {
    margin-top: 2px;
  }
`;

export const Content = styled.h5`
  font-size: 28px;
  margin: 40px;
  height: 800px;
`;

export const Button = styled.button`
  font-size: 20px;
  border: none;
  display: flex;
  margin-left: auto;
`;
