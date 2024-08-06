import React, { useState, useEffect } from "react";
import {
  RecordTitle,
  Container,
  RecordWrapper,
  DropdownItem,
  Record,
  Label,
  Intensity,
  Textarea,
  Input,
  Button,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
  InputContainer,
  UnitLabel,
  IntensityContainer,
  BarContainer,
  ClickableBar,
  RadioContainer,
  RadioInput,
  RadioLabel,
  SavedRecordsContainer,
  RecordItem,
  Dropdown,
  SupplementContainer,
  SupplementOption,
  WeightContainer,
  WeightInput,
} from "./TodayRecordStyles";
import moment from "moment";

const TodayRecord = ({ selectedDate, onRecordDateChange }) => {
  const [mealType, setMealType] = useState("breakfast");
  const [mealContent, setMealContent] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    snack: "",
  });
  const [water, setWater] = useState("");
  const [supplements, setSupplements] = useState({
    multivitamins: false,
    probiotics: false,
    iron: false,
  });
  const [exercise, setExercise] = useState(0);
  const [exerciseIntensity, setExerciseIntensity] = useState(50);
  const [sleep, setSleep] = useState("");
  const [savedRecords, setSavedRecords] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [weight, setWeight] = useState("");

  useEffect(() => {
    loadRecords(selectedDate);
  }, [selectedDate]);

  const loadRecords = (date) => {
    const savedRecords = JSON.parse(localStorage.getItem(date));
    if (savedRecords) {
      setSavedRecords(savedRecords);
      setMealContent(
        savedRecords.mealContent || {
          breakfast: "",
          lunch: "",
          dinner: "",
          snack: "",
        }
      );
      setWater(savedRecords.water || "");
      setSupplements(
        savedRecords.supplements || {
          multivitamins: false,
          probiotics: false,
          iron: false,
        }
      );
      setExercise(savedRecords.exercise || 0);
      setExerciseIntensity(savedRecords.exerciseIntensity || 50);
      setSleep(savedRecords.sleep || "");
      setIsEditing(false);
      if (onRecordDateChange) onRecordDateChange(date);
    } else {
      resetForm();
    }
  };

  const resetForm = () => {
    setMealContent({
      breakfast: "",
      lunch: "",
      dinner: "",
      snack: "",
    });
    setWater("");
    setSupplements({
      multivitamins: false,
      probiotics: false,
      iron: false,
    });
    setExercise(0);
    setExerciseIntensity(50);
    setSleep("");
    setIsEditing(true);
  };

  const handleMealChange = (e) => {
    setMealType(e.target.value);
  };

  const handleMealContentChange = (e) => {
    setMealContent({
      ...mealContent,
      [mealType]: e.target.value,
    });
  };

  const handleSupplementChange = (e) => {
    const { name, checked } = e.target;
    setSupplements({
      ...supplements,
      [name]: checked,
    });
  };

  const handleWaterChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setWater(value);
    }
  };

  const handleExerciseChange = (e) => {
    setExercise(e.target.value);
  };

  const handleIntensityClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const newIntensity = Math.round((clickPosition / rect.width) * 100);
    setExerciseIntensity(newIntensity);
  };

  const handleSleepChange = (e) => {
    setSleep(e.target.value);
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setWeight(value);
    }
  };

  const saveRecords = () => {
    const records = {
      mealContent,
      water,
      supplements,
      exercise,
      exerciseIntensity,
      sleep,
      weight,
      date: selectedDate,
    };

    localStorage.setItem(selectedDate, JSON.stringify(records));

    const storedDates = JSON.parse(localStorage.getItem("dates")) || [];
    if (!storedDates.includes(selectedDate)) {
      storedDates.push(selectedDate);
      localStorage.setItem("dates", JSON.stringify(storedDates));
    }

    setSavedRecords(records);
    setIsEditing(false);
    alert("기록이 저장되었습니다.");
  };

  const handleRecordEdit = () => {
    setIsEditing(true);
  };

  const isToday = selectedDate === moment().format("YYYY-MM-DD");

  return (
    <Container>
      <RecordTitle>
        {isToday ? "오늘의 기록" : `${selectedDate} 기록`}
      </RecordTitle>
      {isEditing ? (
        <>
          <RecordWrapper>
            <Record>
              <Label className="weight">몸무게</Label>
              <WeightContainer>
                <WeightInput
                  type="text"
                  value={weight}
                  onChange={handleWeightChange}
                />
                <UnitLabel>kg</UnitLabel>
              </WeightContainer>
              <Label>식단 기록</Label>
              <Dropdown value={mealType} onChange={handleMealChange}>
                <DropdownItem value="breakfast">아침</DropdownItem>
                <DropdownItem value="lunch">점심</DropdownItem>
                <DropdownItem value="dinner">저녁</DropdownItem>
                <DropdownItem value="snack">간식</DropdownItem>
              </Dropdown>
              <Textarea
                value={mealContent[mealType]}
                onChange={handleMealContentChange}
              />
            </Record>
            <Record>
              <Label>물 기록</Label>
              <InputContainer>
                <Input type="text" value={water} onChange={handleWaterChange} />
                <UnitLabel>ml</UnitLabel>
              </InputContainer>
            </Record>
            <Record>
              <Label>영양제 기록</Label>
              <CheckboxContainer>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="multivitamins"
                    checked={supplements.multivitamins}
                    onChange={handleSupplementChange}
                  />
                  종합비타민
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="probiotics"
                    checked={supplements.probiotics}
                    onChange={handleSupplementChange}
                  />
                  유산균
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="iron"
                    checked={supplements.iron}
                    onChange={handleSupplementChange}
                  />
                  철분제
                </CheckboxLabel>
              </CheckboxContainer>
            </Record>
            <Record>
              <Label>운동 기록</Label>
              <Dropdown value={exercise} onChange={handleExerciseChange}>
                {[...Array(25).keys()].map((hour) => (
                  <DropdownItem key={hour} value={hour}>
                    {hour} 시간
                  </DropdownItem>
                ))}
              </Dropdown>
              <IntensityContainer>
                <Intensity>강도</Intensity>
                <BarContainer onClick={handleIntensityClick}>
                  <ClickableBar intensity={exerciseIntensity} />
                </BarContainer>
              </IntensityContainer>
            </Record>
            <Record>
              <Label>수면 기록</Label>
              <RadioContainer>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="sleep"
                    value="6시간 이하"
                    checked={sleep === "6시간 이하"}
                    onChange={handleSleepChange}
                  />
                  6시간 이하
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="sleep"
                    value="7~8시간"
                    checked={sleep === "7~8시간"}
                    onChange={handleSleepChange}
                  />
                  7~8시간
                </RadioLabel>
                <RadioLabel>
                  <RadioInput
                    type="radio"
                    name="sleep"
                    value="9시간 이상"
                    checked={sleep === "9시간 이상"}
                    onChange={handleSleepChange}
                  />
                  9시간 이상
                </RadioLabel>
              </RadioContainer>
            </Record>
          </RecordWrapper>
          <Button onClick={saveRecords}>기록 저장</Button>
        </>
      ) : (
        <SavedRecordsContainer>
          <RecordItem>
            <Label>몸무게</Label>
            <p>{savedRecords?.weight || ""} kg</p>
          </RecordItem>
          <RecordItem>
            <Label>식단 기록</Label>
            {Object.entries(savedRecords?.mealContent || {}).map(
              ([meal, content]) =>
                content && (
                  <p key={meal}>
                    {meal === "breakfast" && `아침: ${content}`}
                    {meal === "lunch" && `점심: ${content}`}
                    {meal === "dinner" && `저녁: ${content}`}
                    {meal === "snack" && `간식: ${content}`}
                  </p>
                )
            )}
          </RecordItem>
          <RecordItem>
            <Label>물 기록</Label>
            <p>{savedRecords?.water || "0"} ml</p>
          </RecordItem>
          <RecordItem>
            <Label>영양제 기록</Label>
            <SupplementContainer>
              <SupplementOption>
                {savedRecords?.supplements.multivitamins && <p>종합비타민</p>}
              </SupplementOption>
              <SupplementOption>
                {savedRecords?.supplements.probiotics && <p>유산균</p>}
              </SupplementOption>
              <SupplementOption>
                {savedRecords?.supplements.iron && <p>철분제</p>}
              </SupplementOption>
            </SupplementContainer>
          </RecordItem>
          <RecordItem>
            <Label>운동 기록</Label>
            <p>{savedRecords?.exercise || "0"} 시간</p>
            <Label>강도</Label>
            <BarContainer>
              <ClickableBar intensity={savedRecords?.exerciseIntensity || 50} />
            </BarContainer>
          </RecordItem>
          <RecordItem>
            <Label>수면 기록</Label>
            <p>{savedRecords?.sleep || "0시간"}</p>
          </RecordItem>
          <Button onClick={handleRecordEdit}>기록 수정</Button>
        </SavedRecordsContainer>
      )}
    </Container>
  );
};

export default TodayRecord;
