import React from "react";
import styled from "styled-components";
import homeImage from "../../images/homeImage.png";
import Search from "./Search";
import PopularPost from "./PopularPost";

const Container = styled.div`
  background-color: #5383e8;
  width: 100%;
  height: calc(100vh - 150px);
`;

const ItemContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export default () => {
  return (
    <Container>
      <ItemContainer>
        <img src={homeImage} height="200px" alt="homeImage" />

        <Search />
        <PopularPost />
      </ItemContainer>
    </Container>
  );
};
