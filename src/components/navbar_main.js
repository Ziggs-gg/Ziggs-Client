import React, { useState } from 'react';
import styled from 'styled-components';
let Navbar = styled.div`
  width: 520px;
  display: flex;
`;
let Navbar_container = styled.div`
  background-color: #2b2b28;
  width: 260px;
  height: 100vh;
`;
let Title = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
let Title_text = styled.span`
  padding-top: 5px;
  height: 100%;
  font-size: 22px;
  font-family: Noto Sans KR;
  font-weight: 900;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
let Logo = styled.img`
  margin-right: 0.5rem;
  width: 32px;
  height: 32px;
`;
let Search_bar_container = styled.div`
  background-color: #363634;
  display: inline-block;
  width: 216px;
  height: 29px;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 24px;
`;
let Search_bar_form = styled.form``;
let Search_bar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
let Search_bar_input = styled.input`
  background: none;
  border: none;
  width: 117px;
  padding: 0;
  margin-left: 25px;
  ::placeholder {
    font-size: 12px;
    color: rgba(243, 243, 243, 0.8);
  }
  :focus {
    outline: none;
    color: white;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;
let List = styled.ul`
  flex-direction: column;
  align-items: center;
  padding: 0px;

  width: 260px;
  height: 290px;
`;
let List_item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 0px;
  padding-left: 4px;
  margin-top: 40px;
  margin-bottom: 40px;
  :hover {
    color: red;
    border-left: 4px solid red;
  }
`;
let List_item_text = styled.span`
  font-size: 18px;
  margin-left: 7px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

let Subnavbar = styled.div`
  width: 260px;
  height: 100vh;
  background-color: gray;

  color: white;
  text-align: center;
`;
function NavbarMain() {
  let [modalMatch, setmodalMatch] = useState(false);
  let [modalStats, setmodalStats] = useState(false);
  let [modalLeague, setmodalLeague] = useState(false);
  let [modalTeam, setmodalTeam] = useState(false);
  let [modalPlayer, setmodalPlayer] = useState(false);

  return (
    <Navbar>
      <Navbar_container>
        <Title>
          <Logo src="img/LOGO.svg" />
          <Title_text>ZIGGS.GG</Title_text>
        </Title>
        <Search_bar_container>
          <Search_bar_form action="">
            <Search_bar className="search-bar">
              <img src="img/Searching.svg" alt="" />
              <Search_bar_input type="text" placeholder="검색어를 입력해주세요." />
            </Search_bar>
          </Search_bar_form>
        </Search_bar_container>
        <List>
          <a href="#">
            <List_item onClick={() => setmodalMatch(!modalMatch)}>
              <img src="img/Schedule.svg" />
              <List_item_text>경기일정</List_item_text>
            </List_item>
          </a>
          <a href="#">
            <List_item onClick={() => setmodalStats(!modalStats)}>
              <img src="img/Stat_Comparisons.svg" />
              <List_item_text>통계비교</List_item_text>
            </List_item>
          </a>
          <a href="#">
            <List_item onClick={() => setmodalLeague(!modalLeague)}>
              <img src="img/Leagues.svg" />
              <List_item_text>리그보기</List_item_text>
            </List_item>
          </a>
          <a href="#">
            <List_item onClick={() => setmodalTeam(!modalTeam)}>
              <img src="img/Teams.svg" />
              <List_item_text>구단보기</List_item_text>
            </List_item>
          </a>
          <a href="#">
            <List_item onClick={() => setmodalPlayer(!modalPlayer)}>
              <img src="img/Players.svg" />
              <List_item_text>선수보기</List_item_text>
            </List_item>
          </a>
        </List>
      </Navbar_container>
      {modalMatch == true ? <Subnavbar /> : null}
      {modalStats == true ? <Subnavbar /> : null}
      {modalLeague == true ? <Subnavbar /> : null}
      {modalTeam == true ? <Subnavbar /> : null}
      {modalPlayer == true ? <Subnavbar /> : null}
    </Navbar>
  );
}

export default NavbarMain;
