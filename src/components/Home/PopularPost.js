import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1050px;
  height: 400px;
  background-color: white;
  margin-top: 30px;
  border-radius: 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 30px;
`;

const LeftPostsContainer = styled.div`
  width: 50%;
  height: 350px;
  float: left;
`;

const RightPostsContainer = styled.div`
  width: 50%;
  height: 350px;
  float: right;
`;

const PostContaier = styled.div`
  width: 100%;
  height: 20%;
  border: 1px;
  border-bottom: 1px solid #f0f0f0;
  border-right: ${props =>
    props.direction === "right" ? "1px solid #f0f0f0" : "none"};
  &:last-child {
    border-bottom: none;
  }
`;

export default () => {
  return (
    <Container>
      <TitleContainer>
        <Title>OP.GG 인기글</Title>
      </TitleContainer>
      <LeftPostsContainer>
        <PostContaier direction="right" />
        <PostContaier direction="right" />
        <PostContaier direction="right" />
        <PostContaier direction="right" />
        <PostContaier direction="right" />
      </LeftPostsContainer>
      <RightPostsContainer>
        <PostContaier direction="left" />
        <PostContaier direction="left" />
        <PostContaier direction="left" />
        <PostContaier direction="left" />
        <PostContaier direction="left" />
      </RightPostsContainer>
    </Container>
  );
};
