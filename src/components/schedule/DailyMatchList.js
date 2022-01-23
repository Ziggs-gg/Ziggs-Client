import React,{ useState } from 'react';
import '../../App.css';
import styled from 'styled-components';



function DailyMatchList(props) {

  let MatchContent = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    border-bottom: solid 1px #838381;
    :hover{
    background: #838381;
  }
  `;

  let MatchTime = styled.span`
    font-weight: 350;
    font-size: 16px;
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
      padding-left: 52px;
  `;

  let LeagueText = styled.span`
    font-size: 14px;
    font-weight: 350;
  `;
  
  let SeasonText = styled.span`
    font-size: 12px;
    font-weight: 350;
  `;

  let LeagueAndSeason = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 18px;
  `;

  let team1score = props.timematch.homescore;
  let team2score = props.timematch.awayscore;
  let team1Opacity = 0.5;
  let team2Opacity = 0.5;

  if (team1score < team2score) {
    team2Opacity = 1;
  } else {
    team1Opacity = 1;
  }


  return(
    <MatchContent>
      <MatchTime>{ props.timematch.time }</MatchTime>
      <TeamContain>
        <TeamNameAndLogo style={{ opacity: team1Opacity }}>
          <TeamHomeName>
            {props.timematch.home}
          </TeamHomeName>
          <TeamHomeLogo>
            <img src={`../img/${props.timematch.home}.svg`} alt="" />
          </TeamHomeLogo>
        </TeamNameAndLogo>
        <MatchScore>
          <ScoreText>{props.timematch.homescore} - {props.timematch.awayscore}</ScoreText>
          <ScoreBo>BO3</ScoreBo>
        </MatchScore>
        <TeamNameAndLogo style={{ opacity: team2Opacity }}>
          <TeamAwayLogo>
            <img src={`../img/${props.timematch.away}.svg`} alt="" />
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