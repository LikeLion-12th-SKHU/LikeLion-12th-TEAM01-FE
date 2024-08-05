import styled from "styled-components";

export const Container = styled.div``;

export const InfoDetail = styled.div``;

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

  &:hover {
    color: #000000;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px;
`;
