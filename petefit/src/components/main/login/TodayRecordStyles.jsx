import styled from "styled-components";

export const RecordTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
`;
export const Container = styled.div`
  flex-direction: column;
  padding: 20px;
  border: 3px solid #7ed188;
  background-color: #ffffff;
  width: 840px;
  height: 770px;
  border-radius: 10px;
  margin-top: -22px;
  margin-left: -23px;
`;

export const RecordWrapper = styled.div`
  margin-top: 30px;
`;

export const TitleDropdown = styled.select`
  width: 180px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  font-size: 25px;
  font-weight: bold;
`;

export const Dropdown = styled.select`
  font-size: 16px;
  padding-bottom: 10px;
  border: none;
  border-bottom: 1px solid #868686;
  border-radius: 0;
  resize: none;
  outline: none;
  width: 80px;
`;

export const DropdownItem = styled.option`
  display: block;
  font-size: 15px;
  padding: 15px;
`;

export const Record = styled.div`
  width: 80px;
  margin-bottom: 35px;
  margin-left: 90px;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 15px;
  font-size: 20px;
`;

export const Textarea = styled.input`
  width: 180px;
  padding: 10px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #868686;
  border-radius: 0;
  resize: none;
  outline: none;

  &:focus {
    border-bottom: 1px solid #868686;
  }
`;

export const Input = styled.input`
  width: 110px;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #868686;
  border-radius: 0;
  resize: none;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UnitLabel = styled.span`
  font-size: 16px;
  padding: 10px;
  border-bottom: 1px solid #868686;
  border-radius: 0;
  resize: none;
  outline: none;
`;

export const Button = styled.button`
  width: 260px;
  height: 69px;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #7ed188;
  border: none;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #6cc777;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin: 5px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const IntensityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const BarContainer = styled.div`
  width: 300px;
  height: 20px;
  background-color: #e9e9e9;
  border-radius: 10px;
  margin-left: 20px;
  cursor: pointer;
`;

export const ClickableBar = styled.div`
  width: ${(props) => props.intensity}%;
  height: 100%;
  background-color: #4caf50;
  border-radius: 10px;
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RadioInput = styled.input`
  font-size: 16px;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #7ed188;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  margin-right: 8px;

  &:checked {
    background-color: #bcf3c4;
    border-color: #bcf3c4;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background-color: #bcf3c4;
    transform: translate(-50%, -50%);
  }

  &:focus {
    outline: none;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const SavedRecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
`;

export const RecordItem = styled.div`
  width: 80px;
  margin-bottom: 35px;
  margin-left: 90px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const DateHeader = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const SupplementContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SupplementOption = styled.p`
  font-size: 16px;
  margin-right: 7px;
`;

export const WeightInput = styled.input``;
