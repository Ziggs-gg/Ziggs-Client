import React,{ useState } from 'react';
import '../../App.css';
import styled from 'styled-components';

function MvpStanding() {
  
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

  let PositionLogo = styled.td`

  `;

  let PlayerName = styled.td`
    padding-right: 100px;
    padding-top: 10px;
  `;

  let MvpPoint = styled.td`
    font-size: 16px;
    font-weight: 500;
  `;

  return(
    <Contain>
      <Title>MVP 순위</Title>
      <StandingTable>
        <StandingTableTr>
          <Ranking>1</Ranking>
          <RankingChange>▲00</RankingChange>
          <TeamLogo><img src="../../img/teams-logo/DWG.svg" alt=''/></TeamLogo>
          <PositionLogo><img src="../../img/position/MID.svg" alt='' /></PositionLogo>
          <PlayerName>DK ShowMaker</PlayerName>
          <MvpPoint>1000pts</MvpPoint>
        </StandingTableTr>
      </StandingTable>
    </Contain>

  );
}

export default MvpStanding;