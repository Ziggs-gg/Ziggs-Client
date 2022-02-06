import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import Data from '../../data/LeagueData.js';
import SubNabBarCell from './SubNavBarCell.js';
import { Link, Route } from 'react-router-dom';

function ShowMatch(props) {
  let Image = styled.div`
    display: flex;
    align-items: center;
    width: 24px;
    height: auto;
  `;
  let Maintitle = styled.div`
    display: flex;
    padding: 5px 0 0 25px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  `;
  let Title = styled.p`
    font-size: 18px;
    margin-left: 7px;
  `;

  let Close = styled.button`
    background: #131310;
    margin-top: 10px;
    margin-left: 132px;
    padding: 10px;
    height: 10%;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let Leaguetitle = styled.div`
    margin: 20px 10px auto 26px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid;
    border-color: #c13631;
  `;

  const [leagueData, setleagueData] = useState(Data);
  const majorLeague = leagueData.filter((leagueData) => leagueData.division == 'major');
  const minorLeague = leagueData.filter((leagueData) => leagueData.division == 'minor');
  const worldLeague = leagueData.filter((leagueData) => leagueData.division == 'world');
  return (
    <div className="navbar-contain">
      <Maintitle>
        <Image>
          <img src="../img/Schedule.svg" />
        </Image>
        <Title>경기일정</Title>
        <Close
          onClick={() => {
            props.setmodalMatch(false);
          }}>
          <img src="../img/vector_36.svg" />
        </Close>
      </Maintitle>
      <Leaguetitle>메이저리그</Leaguetitle>
      {majorLeague.map((data, index) => {
        return (
          <Link to={'/match/' + data.name}>
            <SubNabBarCell leagues={data} key={index} />
          </Link>
        );
      })}
      <Leaguetitle>마이너리그</Leaguetitle>
      {minorLeague.map((data, index) => {
        return (
          <Link to={'/match/' + data.name}>
            <SubNabBarCell leagues={data} key={index} />
          </Link>
        );
      })}
      <Leaguetitle>국제대회</Leaguetitle>
      {worldLeague.map((data, index) => {
        return (
          <Link to={'/match/' + data.name}>
            <SubNabBarCell leagues={data} key={index} />
          </Link>
        );
      })}
    </div>
  );
}

export default ShowMatch;
