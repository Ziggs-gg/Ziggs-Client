import React,{ useState } from 'react';
import '../../App.css';
import styled from 'styled-components';


function ScheduleList(){
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
    color: #F3F3F3;
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

  let Team1 = styled.span`
    font-size: 16px;
    font-weight: 500;
    opacity: 0.5;
  `;

  let Team2 = styled.span`
    font-size: 16px;
    font-weight: 500;
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

  let awayscore = 2;
  let homescore = 3;

  //let opacitiy1 = 0.5;
  //let opacitiy1 = 1;
  //opacitiyChange = awayscore < homescore ? opacitiy1:opacitiy2;
  //awayscore < homescore ? setOpacitiy(1):setOpacitiy(0.5);
  return(
    <Contain>
      <TimeAndBo>
        <TimeText>17:00</TimeText>
        <BoText>BO3</BoText>
      </TimeAndBo>
      <TeamNameAndLogo>
        <TeamHomeLogo >
          <img src="../img/DRX.svg" alt='' />
        </TeamHomeLogo>
        <TeamHomeName>DRX</TeamHomeName>
      </TeamNameAndLogo>
      <MatchScore><Team1>{awayscore}</Team1> - <Team2>{homescore}</Team2></MatchScore>
      <TeamNameAndLogo>
        <TeamAwayName>GEN</TeamAwayName>
        <TeamAwayLogo>
          <img src='../img/GENG.svg' alt='' />
        </TeamAwayLogo>
      </TeamNameAndLogo>
    </Contain>
  );
}

export default ScheduleList;