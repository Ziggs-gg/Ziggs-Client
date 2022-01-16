import React,{ useState } from 'react';
import '../App.css';
import styled from 'styled-components';

function TeamStanding() {
  
  let Contain = styled.div`
    margin-left: 90px;
    margin-top: 16px;
  `;

  let Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
  `;

  let StandingTable = styled.table`
    
  `;

  let StandingTableTr = styled.tr`
    margin-bottom: 8px;
  `;

  let Ranking = styled.td`
    font-size: 30px;
    font-weight: 900;
    padding: 9px 4px 9px 9px;
  `;

  let RankingChange = styled.td`
    font-size: 14px;
    font-weight: 350;
  `;

  let TeamLogo = styled.td`
    padding: 8px 10px 8px 20px;
  `;

  let TeamNameAndRecord = styled.td`
    display: flex;
    flex-direction: column;
    padding-right: 160px;
    padding-top: 10px;
  `;

  let TeamName = styled.span`
    font-size: 16px;
    font-weight: 500;
  `;

  let Record = styled.span`
    font-size: 14px;
    font-weight: 350;
  `;

  let WinRate = styled.td`
    font-size: 16px;
    font-weight: 500;
    padding-right: 20px;
  `;

  let VictoryPoint = styled.td`
    font-size: 16px;
    font-weight: 500;
  `;

  return(
    <Contain>
      <Title>팀 순위</Title>
      <StandingTable>
        <StandingTableTr>
          <Ranking>1</Ranking>
          <RankingChange>▲00</RankingChange>
          <TeamLogo><img src='../img/DWG.svg' alt=''/></TeamLogo>
          <TeamNameAndRecord><TeamName>DWG KIA</TeamName><Record>16승 - 2패</Record></TeamNameAndRecord>
          <WinRate>89%</WinRate>
          <VictoryPoint>+23</VictoryPoint>
        </StandingTableTr>
      </StandingTable>
    </Contain>

  );
}

export default TeamStanding;