import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${props => (props.current ? "#5383e8" : "#EAEAEA")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props => (props.current ? "white" : "black")};
  padding: 0 200px 20px 200px;
  font-size: 12px;
`;

const FooterLink = styled.div``;

const LinkItem = styled(Link)`
  margin-left: 15px;
`;

const FooterSns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-top: 10px;
`;

const FooterSnsInfo = styled.span``;

const IconContainer = styled.div`
  display: flex;
`;

const Icon = styled.a`
  margin-left: 10px;
  font-size: 18px;
`;

export default withRouter(({ location: { pathname } }) => (
  <FooterContainer current={pathname === "/"}>
    <FooterLink>
      <LinkItem>About OP.GG</LinkItem>
      <LinkItem>로고 히스토리</LinkItem>
      <LinkItem>개인정보처리방침</LinkItem>
      <LinkItem>도움말</LinkItem>
      <LinkItem>제휴</LinkItem>
      <LinkItem>문의피드백</LinkItem>
      <LinkItem>채용</LinkItem>
    </FooterLink>
    <FooterSns>
      <FooterSnsInfo>© 2019 OP.GG. Cloning by Giseok</FooterSnsInfo>
      <IconContainer>
        <Icon href="https://twitter.com/globalopgg/">
          <FaTwitter />
        </Icon>
        <Icon href="https://www.instagram.com/opgginc/">
          <FaInstagram />
        </Icon>
        <Icon href="https://www.facebook.com/lolopgg/">
          <FaFacebookSquare />
        </Icon>
      </IconContainer>
    </FooterSns>
  </FooterContainer>
));
