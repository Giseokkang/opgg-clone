import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/opggLogo.svg";

const Container = styled.div`
  width: 100%;
  height: 130px;
`;

const FirstContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: #232f46;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeLink = styled(Link)`
  width: 98px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5383e8;
`;

const Login = styled.div`
  width: 60px;
  height: 25px;
  background-color: #5383e8;
  color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  font-size: 12px;
`;

const SecondContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #5383e8;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 160px;
`;

const LinkItem = styled.li`
  color: white;
  border-bottom: 3px solid ${props => (props.current ? "white" : "transparent")};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.current ? "1" : "0.7")};
  margin-left: 20px;
  transition: border-bottom 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const SLink = styled(Link)`
  font-size: 15px;
`;

const ThirdContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${props => (props.current ? "#294174" : "#757575")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 11px;
`;

const EvnetLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ location: { pathname } }) => {
  return (
    <Container>
      <FirstContainer>
        <HomeLink to="/">
          <img src={logo} width="65px" height="16px" alt="OP.GG"></img>
        </HomeLink>
        <Login>로그인</Login>
      </FirstContainer>
      <SecondContainer>
        <List>
          <LinkItem current={pathname === "/"}>
            <SLink to="/">홈</SLink>
          </LinkItem>

          <LinkItem current={pathname === "/champion/analysis"}>
            <SLink to="/champion/analysis">챔피언 분석</SLink>
          </LinkItem>

          <LinkItem current={pathname === "/champion/statistics"}>
            <SLink to="/champion/statistics">통계</SLink>
          </LinkItem>

          <LinkItem current={pathname === "/ranking/ladder"}>
            <SLink to="/ranking/ladder">랭킹</SLink>
          </LinkItem>

          <LinkItem current={pathname === "/spectate/pro"}>
            <SLink to="/spectate/pro/">프로관전</SLink>
          </LinkItem>

          <LinkItem current={pathname === "/community"}>
            <SLink to="/community">커뮤니티</SLink>
          </LinkItem>
        </List>
      </SecondContainer>
      <ThirdContainer current={pathname === "/"}>
        <EvnetLink href="https://event.op.gg/logo/hangul_2019/">
          오피지지와 함께하는 '한글날' 기념 로고 공모전. 많은 참여 부탁드립니다.
          9.10.~9.29
        </EvnetLink>
      </ThirdContainer>
    </Container>
  );
};

export default withRouter(Header);
