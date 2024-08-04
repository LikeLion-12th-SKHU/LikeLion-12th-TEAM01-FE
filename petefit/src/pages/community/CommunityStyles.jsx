import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1320px;
  margin: 0 auto;
  position: relative;
`;

export const Warning = styled.div`
  font-size: 20px;
  display: flex;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 40px;
`;

export const Emphasis = styled.div`
  color: #ff0000;
`;

export const Header = styled.h1`
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 150px 100px 100px 100px 100px;
  height: 45px;
  padding-top: 5px;
  gap: 13px;
  background-color: #b7eabd;
  border-top: 3px solid #000000;
  border-bottom: 1px solid #000000;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 150px 100px 100px 100px 100px;
  gap: 10px;
  border-bottom: 1px solid #000000;
  height: 80px;
`;

export const CellCategory = styled.div`
  color: #888888;
  font-size: 19px;
  padding: 7px 10px 12px 10px;
  width: 80px;
  height: 15px;
  text-align: center;
  border: 1px solid #e7e7e7;
  border-radius: 40px;
  background-color: #e7e7e7;
  margin-left: 30px;
  margin-top: 22px;
`;

export const CellTitle = styled.div`
  color: #000000;
  padding: 10px;
  margin-left: 40px;
  font-size: 23px;
  color: ${({ isAnonymous }) => (isAnonymous ? "gray" : "black")};
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: ${({ isAnonymous }) => (isAnonymous ? "gray" : "black")};
`;

export const Cell = styled.div`
  display: flex;
  font-size: 21px;
  padding: 10px 10px 14px 10px;
  justify-content: center;
  align-items: center;

  div {
    margin-left: 17px;
  }
`;

export const ReportButton = styled.button`
  background-color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
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

export const PostButton = styled.button`
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 200px;
  right: 20px;
  padding: 10px 15px;
  background-color: #7ed188;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #77c680;
  }
`;

export const ListContainer = styled.div``;
