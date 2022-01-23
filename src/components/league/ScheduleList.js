import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import Data from '../../data/matchData.js';

function ScheduleList(props) {
  let Contain = styled.div`
    display: flex;
    width: 280px;
    height: 61px;
  `;

  let TimeAndBo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 2px;
    margin-right: 4px;
  `;

  let TimeText = styled.span`
    font-size: 16px;
    font-weight: 500;
  `;

  let BoText = styled.span`
    font-size: 12px;
    font-weight: 350;
    color: #f3f3f3;
  `;

  let TeamNameAndLogo = styled.div`
    display: flex;
    margin: 0;
  `;

  let TeamHomeName = styled.span`
    font-size: 16px;
    font-weight: 500;
    padding-top: 8px;
    margin-left: 4px;
  `;

  let TeamHomeLogo = styled.figure`
    margin: 0;
  `;

  let MatchScore = styled.div`
    font-size: 16px;
    font-weight: 500;
    padding-top: 8px;
    margin-left: 20px;
    margin-right: 20px;
  `;

  let TeamAwayName = styled.span`
    font-size: 16px;
    font-weight: 500;
    padding-top: 8px;
    margin-right: 4px;
  `;

  let TeamAwayLogo = styled.figure`
    margin: 0;
  `;
  let team1score = props.match.team1score;
  let team2score = props.match.team2score;
  let team1Opacity = 0.5;
  let team2Opacity = 0.5;

  team1score < team2score ? (team2Opacity = 1) : (team1Opacity = 1);

  return (
    <Contain>
      <TimeAndBo>
        <TimeText>17:00</TimeText>
        <BoText>BO3</BoText>
      </TimeAndBo>
      <TeamNameAndLogo style={{ opacity: team1Opacity }}>
        <TeamHomeLogo>
          <img src={`../img/${props.match.team1}.svg`} alt="" />
        </TeamHomeLogo>
        <TeamHomeName>DRX</TeamHomeName>
      </TeamNameAndLogo>
      <MatchScore>
        {props.match.team1score} - {props.match.team2score}
      </MatchScore>
      <TeamNameAndLogo style={{ opacity: team2Opacity }}>
        <TeamAwayName>GEN</TeamAwayName>
        <TeamAwayLogo>
          <img src={`../img/${props.match.team2}.svg`} alt="" />
        </TeamAwayLogo>
      </TeamNameAndLogo>
    </Contain>
  );
}

export default ScheduleList;
