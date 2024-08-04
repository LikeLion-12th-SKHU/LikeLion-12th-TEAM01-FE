import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Warning,
  Emphasis,
  Form,
  Label,
  Input,
  Dropdown,
  Textarea,
  SubmitButton,
  Title,
  Category,
  Content,
} from "./CommunityPostStyles";

const CommunityPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("운동");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    navigate("/board");
  };

  return (
    <Container>
      <Header>커뮤니티</Header>
      <Warning>
        <div>
          ※ 욕설, 혹은 과도한 비속어 사용 시 제재를 받을 수 있습니다.
          <br></br>※ 해당 커뮤니티와 무관한 내용은 삭제될 수 있습니다.
          <br></br>
          <Emphasis>※ 제재가 누적되는 경우 탈퇴 처리될 수 있습니다.</Emphasis>
        </div>
      </Warning>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Category>
            <Dropdown
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="운동">운동</option>
              <option value="다이어트">다이어트</option>
              <option value="건강">건강</option>
              <option value="음식">음식</option>
              <option value="일상">일상</option>
              <option value="건의사항">건의사항</option>
            </Dropdown>
          </Category>
        </Label>
        <Label>
          <Title>
            <h3>제목</h3>
            <Input
              type="text"
              placeholder="제목을 입력하세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Title>
        </Label>
        <Label>
          <Content>
            <h3>내용</h3>
            <Textarea
              type="text"
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </Content>
        </Label>
        <SubmitButton type="submit">게시하기</SubmitButton>
      </Form>
    </Container>
  );
};

export default CommunityPost;
