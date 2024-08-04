import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1320px;
  margin: 0 auto;
`;

export const Warning = styled.div`
  font-size: 20px;
  display: flex;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
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

export const Form = styled.form`
  width: 1300px;
  height: 800px;
  padding: 20px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  font-size: 20px;
  width: 1300px;
  height: 40px;
  padding: 10px;
  margin-bottom: 16px;
  border: 2px solid #29312a;

  & .titleInput {
    height: 100px;
  }
`;

export const Textarea = styled.textarea`
  font-size: 20px;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #29312a;
  width: 1300px;
  height: 500px;
  resize: none;
`;

export const Dropdown = styled.select`
  font-size: 22px;
  font-weight: bold;
  padding: 7px 10px;
  margin-top: 0;
  margin-bottom: 10px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #b7eabd;
`;

export const SubmitButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  width: 130px;
  height: 50px;
  padding: 10px 20px;
  padding: 7px 15px;
  margin-left: 1190px;
  background-color: #7ed188;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 3px #d4d4d4;
  cursor: pointer;

  &:hover {
    background-color: #77c680;
  }
`;

export const Category = styled.div``;

export const Title = styled.div`
  h3 {
    font-size: 27px;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  h3 {
    font-size: 27px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
