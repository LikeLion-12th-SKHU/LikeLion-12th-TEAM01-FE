import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoDetail = styled.div`
  display: grid;
  align-items: center;
  margin-top: 40px;

  hr {
    height: 0.5px;
    width: 1300px;
    background-color: #000000;
  }

  button {
    width: 100px;
    position: relative;
  }
`;

export const DoubleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TabContainer = styled.div`
  margin-top: 50px;
`;

export const Tab = styled.div`
  position: relative;
  justify-content: space-between;
  margin-right: 40px;
  margin-left: 40px;
  font-size: 32px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#000000" : "#A4A4A4")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "5px solid #7ED188" : "none")};
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;

export const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-top: 5px;
  margin-bottom: 45px;
`;

export const Source = styled.h3`
  font-size: 20px;
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-top: 5px;
`;

export const From = styled.h4`
  font-size: 20px;
  margin-top: 7px;
`;

export const Content = styled.p`
  width: 1300px;
  height: 1200px;

  h3 {
    font-size: 28px;
    margin: 30px 50px;
  }
`;

export const Recommend = styled.div`
  font-size: 20px;

  div {
    display: flex;
  }

  .recommend {
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 3px;
  }

  img {
    margin-top: 3px;
  }
`;

export const Save = styled.div`
  font-size: 20px;

  div {
    display: flex;
  }

  .saveCount {
    margin-top: 8px;
    margin-right: 3px;
    width: 100px;
  }

  img {
    margin-top: 4px;
    margin-right: 8px;
    margin-left: 10px;
    height: 25px;
  }
`;

export const Views = styled.div`
  font-size: 20px;

  div {
    display: flex;
  }

  .viewsCount {
    margin-top: 8px;
    margin-left: 8px;
  }

  img {
    margin-top: 3px;
    height: 25px;
  }
`;
