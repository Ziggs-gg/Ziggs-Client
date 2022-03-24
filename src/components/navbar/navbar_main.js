import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ShowPlayer from './ShowPlayer';
import ShowTeam from './ShowTeam';
import ShowLeague from './ShowLeague';
import ShowMatch from './ShowMatch';
import { ReactComponent as Schedule } from '../../img/icon/Schedule/Two-Tone.svg';
import Ziggs_Logo from '../../img/Logo.svg';
import Searching from '../../img/icon/Searching.svg';
import Compare from '../../img/icon/Stat-Comparisons/Two-Tone.svg';
import Leagues from '../../img/icon/Leagues/Two-Tone.svg';
import Teams from '../../img/icon/Teams/Two-Tone.svg';
import Player from '../../img/icon/Players/Two-Tone.svg';

let Navbar = styled.div`
  display: flex;
`;
let NavbarContainer = styled.div`
  position: --webkit-sticky;
  position: sticky;
  top: 0;
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
let TitleText = styled.span`
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
let SearchBarContainer = styled.div`
  background-color: #363634;
  display: inline-block;
  width: 216px;
  height: 29px;
  border-radius: 20px;
  margin-top: 30px;
  margin-left: 24px;
`;
let SearchBarForm = styled.form``;
let SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;
let SearchBarInput = styled.input`
  background: none;
  border: none;
  width: 117px;
  padding: 0;
  margin-left: 15px;
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
  margin-top: 40px;
  margin-bottom: 40px;
  :hover {
    color: red;
    border-left: 4px solid red;
  }
`;
let ListItemText = styled.span`
  font-size: 18px;
  margin-left: 7px;
  font-family: Noto Sans KR;
  font-weight: 500;
`;

let Subnavbar2 = styled.div`
  width: 260px;
  height: 100vh;
  background-color: green;

  color: white;
  text-align: center;
`;

let ScheduleIcon = styled(Schedule)`
  path,
  rect {
    stroke: #f3f3f3;
  }
`;

function NavbarMain(props) {
  let [modalMatch, setmodalMatch] = useState(false);
  let [modalLeague, setmodalLeague] = useState(false);
  let [modalTeam, setmodalTeam] = useState(false);
  let [modalPlayer, setmodalPlayer] = useState(false);

  return (
    <Navbar>
      <NavbarContainer>
        <a href="/">
          <Title>
            <Logo src={Ziggs_Logo} />
            <TitleText>ZIGGS.GG</TitleText>
          </Title>
        </a>
        <SearchBarContainer>
          <SearchBarForm action="">
            <SearchBar className="search-bar">
              <img src={Searching} alt="" />
              <SearchBarInput type="text" placeholder="검색어를 입력해주세요." />
            </SearchBar>
          </SearchBarForm>
        </SearchBarContainer>
        <List>
          <List_item
            onClick={() => {
              setmodalMatch(!modalMatch);
              setmodalLeague(false);
              setmodalTeam(false);
              setmodalPlayer(false);
            }}>
            <ScheduleIcon />
            <ListItemText>경기일정</ListItemText>
          </List_item>
          <Link to="/compare">
            <List_item
              onClick={() => {
                setmodalMatch(false);
                setmodalLeague(false);
                setmodalTeam(false);
                setmodalPlayer(false);
              }}>
              <img src={Compare} />
              <ListItemText>통계비교</ListItemText>
            </List_item>
          </Link>
          <List_item
            onClick={() => {
              setmodalMatch(false);
              setmodalLeague(!modalLeague);
              setmodalTeam(false);
              setmodalPlayer(false);
            }}>
            <img src={Leagues} />
            <ListItemText>리그보기</ListItemText>
          </List_item>
          <List_item
            onClick={() => {
              setmodalMatch(false);
              setmodalLeague(false);
              setmodalTeam(!modalTeam);
              setmodalPlayer(false);
            }}>
            <img src={Teams} />
            <ListItemText>구단보기</ListItemText>
          </List_item>
          <List_item
            onClick={() => {
              setmodalMatch(false);
              setmodalLeague(false);
              setmodalTeam(false);
              setmodalPlayer(!modalPlayer);
            }}>
            <img src={Player} />
            <ListItemText>선수보기</ListItemText>
          </List_item>
        </List>
      </NavbarContainer>
      {modalMatch == true ? <ShowMatch setmodalMatch={setmodalMatch} /> : null}
      {modalLeague == true ? <ShowLeague setmodalLeague={setmodalLeague} /> : null}
      {modalTeam == true ? <ShowTeam setmodalTeam={setmodalTeam} /> : null}
      {modalPlayer == true ? <ShowPlayer setmodalPlayer={setmodalPlayer} /> : null}
    </Navbar>
  );
}

export default NavbarMain;
