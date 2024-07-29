import React, { useState, useEffect } from "react";
import information from "../../backend/Information.json";
import {
  Container,
  InfoList,
  InfoItem,
  CountWrapper,
  ElementWrapper,
  Line,
  Tab,
  Tabs,
  SearchWrapper,
  Pagination,
  PageButton,
  ArrowButton,
} from "./InformationStyles";
import Search from "../../components/search/Search";

const Information = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 한 페이지 항목 수(수정 필요)

  useEffect(() => {
    // 데이터 JSON 파일에서 가져오기
    setData(information);
  }, []);

  useEffect(() => {
    // 검색, 카테고리 필터링
    let result = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (activeCategory !== "전체") {
      result = result.filter((item) => item.category === activeCategory);
    }

    setFilteredData(result);
  }, [searchQuery, activeCategory, data]);

  // 페이지 네비게이션
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

  // 카테고리 데이터
  const categories = ["전체", ...new Set(data.map((item) => item.category))];

  return (
    <Container>
      <SearchWrapper>
        <Search searchQuery={searchQuery} onSearch={setSearchQuery} />
      </SearchWrapper>
      <Tabs>
        {categories.map((category) => (
          <Tab
            key={category}
            active={activeCategory === category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
          >
            {category}
          </Tab>
        ))}
      </Tabs>
      <Line></Line>
      <InfoList>
        {paginatedData.map((item, index) => (
          <InfoItem key={index}>
            <ElementWrapper>
              <h3>{item.source}</h3>
              <h2>{item.title}</h2>
              <CountWrapper>
                <div>
                  <div className="commend">
                    <img src="../../../img/recommend.png" alt="recommend"></img>
                  </div>
                  추천 수: {item.recommend}
                </div>
                <div>
                  <div className="save">
                    <img src="../../../img/save.png" alt="save"></img>
                  </div>
                  저장 수: {item.save}
                </div>
                <div>
                  <div className="views">
                    <img src="../../../img/views.png" alt="views"></img>
                  </div>
                  조회 수: {item.views}
                </div>
              </CountWrapper>
            </ElementWrapper>
          </InfoItem>
        ))}
      </InfoList>
      <Line></Line>
      <Pagination>
        <ArrowButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          &#8249;
        </ArrowButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
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

export default Information;
