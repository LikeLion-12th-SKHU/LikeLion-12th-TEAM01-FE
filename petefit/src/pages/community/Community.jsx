import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import data from "../../backend/Community.json";
import {
  Container,
  Header,
  PostButton,
  HeaderRow,
  Row,
  Warning,
  Emphasis,
  CellCategory,
  CellTitle,
  Item,
  Cell,
  ReportButton,
  Pagination,
  PageButton,
  ArrowButton,
  ListContainer,
} from "./CommunityStyles";

const CommunityItem = ({
  id,
  category,
  title,
  writer,
  date,
  views,
  recommend,
}) => {
  const isAnonymous = category === "건의사항";

  return (
    <Link
      to={`detail/${id}`}
      style={{ textDecoration: "none", color: "#000000" }}
    >
      {/* 수정 필요 */}
      <Row>
        <CellCategory>
          {isAnonymous ? "건의사항" : category || "미정"}
        </CellCategory>
        <CellTitle isAnonymous={isAnonymous}>
          {isAnonymous ? "비공개 게시글입니다." : title || "제목 없음"}
        </CellTitle>
        <Item isAnonymous={isAnonymous}>
          {isAnonymous ? "비공개" : writer || "미정"}
        </Item>
        <Item isAnonymous={isAnonymous}>
          {isAnonymous ? "비공개" : date || "미정"}
        </Item>
        <Item isAnonymous={isAnonymous}>
          {isAnonymous ? "비공개" : views || "0"}
        </Item>
        <Item isAnonymous={isAnonymous}>
          {isAnonymous ? "비공개" : recommend || "0"}
        </Item>
        <Item>
          <ReportButton>
            <img src="../../../img/report.png" alt="report"></img>
          </ReportButton>
        </Item>
      </Row>
    </Link>
  );
};

const Community = () => {
  const navigate = useNavigate();
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // 필터링된 데이터
  const filteredData = data;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemClick = (id) => {
    navigate(`/${id}`);
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
      <Link
        to={`/board/write`}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <PostButton>작성하기</PostButton>
      </Link>
      <ListContainer>
        <HeaderRow>
          <Cell></Cell>
          <Cell>제목</Cell>
          <Cell>
            <div>작성자</div>
          </Cell>
          <Cell>
            <div>작성일</div>
          </Cell>
          <Cell>
            <div>조회수</div>
          </Cell>
          <Cell>추천수</Cell>
          <Cell>신고</Cell>
        </HeaderRow>
        {paginatedData.map((item) => (
          <CommunityItem
            key={item.id}
            id={item.id}
            category={item.category}
            title={item.title}
            writer={item.writer}
            date={item.date}
            views={item.views}
            recommend={item.recommend}
            onClick={handleItemClick}
          />
        ))}
      </ListContainer>
      <Pagination>
        <ArrowButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          &#8249;
        </ArrowButton>
        {[...Array(totalPages).keys()].map((number) => (
          <PageButton
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            disabled={currentPage === number + 1}
          >
            {number + 1}
          </PageButton>
        ))}
        <ArrowButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          &#8250;
        </ArrowButton>
      </Pagination>
    </Container>
  );
};

export default Community;
