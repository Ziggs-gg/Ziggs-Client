import React,{ useState } from 'react';
import '../App.css';
import styled from 'styled-components';



function DailyMatchList(props) {

  let ScheduleContain = styled.div`
    color: #ffffff;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 40px;
    width: 1160px;
  `;

  let Date = styled.div`
    font-weight: 900;
    font-size: 20px;
    margin-bottom: 8px;
  `;

  let MatchContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    border-top: solid 1px gray;
    border-bottom: solid 1px gray;
  `;

  let MatchTime = styled.span`
    font-weight: 900;
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 8px;
  `;

  let TeamContain = styled.div`
    display: flex;
  `;

  let TeamNameAndLogo = styled.div`
    display: flex;
    padding-top: 20px;
  `;

  let TeamHomeName = styled.span`
    font-size: 16px;
    font-weight: 500;
    padding-top: 8px;
    padding-right: 8px;
  `;

  let TeamHomeLogo = styled.figure`
    margin: 0 25px 0 0;
  `;

  let TeamAwayName = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding-top: 8px;
  `;

  let TeamAwayLogo = styled.figure`
  margin: 0 10px 0 0;
  `;

  let MatchScore = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    text-align: center;
  `;

  let ScoreText = styled.span`
    font-size: 16px;
    font-weight: 500;
    padding-top: 20px;
    margin-bottom: 5px;
  `;

  let ScoreBo = styled.span`
    font-size: 12px;
    font-weight: 300;
  `;

  let LeagueLogo = styled.figure`
      margin: 0 25px 0 0;
  `;

  let LeagueText = styled.span`
    font-size: 16px;
    font-weight: 500;
  `;
  
  let SeasonText = styled.span`
    font-size: 14px;
    font-weight: 300;
  `;

  let LeagueAndSeason = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 18px;
  `;

  return(
    <MatchContent>
      <MatchTime>{ props.timematch.time }</MatchTime>
      <TeamContain>
        <TeamNameAndLogo>
          <TeamHomeName>
            {props.timematch.home}
          </TeamHomeName>
          <TeamHomeLogo>
            <img src="../img/GENG.svg" alt="" />
          </TeamHomeLogo>
        </TeamNameAndLogo>
        <MatchScore>
          <ScoreText>{props.timematch.homescore} - {props.timematch.awayscore}</ScoreText>
          <ScoreBo>BO3</ScoreBo>
        </MatchScore>
        <TeamNameAndLogo>
          <TeamAwayLogo>
            <img src="../img/KT.svg" alt="" />
          </TeamAwayLogo>
          <TeamAwayName>
            {props.timematch.away}
          </TeamAwayName>
        </TeamNameAndLogo>
      </TeamContain>
      <LeagueAndSeason>
        <LeagueLogo>
          <img src='../img/LCK_Logo.svg' alt="" />
          <LeagueText>LCK</LeagueText>
        </LeagueLogo>
        <SeasonText>2021 SPRING WEEK</SeasonText>
      </LeagueAndSeason>
    </MatchContent>
  );
}

export default DailyMatchList;