import styled from "styled-components";

export const Container = styled.div``;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoItem = styled.div`
  display: grid;
  align-items: center;
  background: #ffffff;
  width: 1320px;
  height: 150px;
  text-align: left;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 38px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .commend {
    margin-top: -4px;
    margin-right: 3px;
  }

  .save {
    margin-top: -1px;
    margin-right: 3px;
  }

  .views {
    margin-top: -2px;
    margin-right: 3px;
  }

  div {
    float: left;
    font-size: 20px;
    margin-right: 20px;
  }
`;

export const CountWrapper = styled.div`
  justify-content: space-between;
  margin-top: 7px;
`;

export const ElementWrapper = styled.div`
  margin-top: 5px;
  margin-left: 60px;
`;

export const SearchWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 70px;
`;

export const Line = styled.hr`
  background-color: #767676;
  border: none;
  height: 2px;
  width: 1310px;
  margin-bottom: 0;
`;

export const Tab = styled.div`
  position: relative;
  justify-content: space-between;
  margin-right: 35px;
  margin-left: 35px;
  font-size: 40px;
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
  margin: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const PageButton = styled.button`
  font-size: 22px;
  background-color: #ffffff;
  color: #000000;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  color: ${(props) => (props.active ? "#000000" : "#A4A4A4")};

  &:hover {
    color: #000000;
  }
`;

export const ArrowButton = styled(PageButton)`
  font-size: 40px;
  width: 100px;
  text-align: center;
  border: none;
  margin-bottom: 7px;
`;