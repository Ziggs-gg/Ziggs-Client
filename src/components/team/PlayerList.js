import React from 'react';
import '../../App.css';
import styled from 'styled-components';
import PlayerListCell from './PlayerListCell';
function PlayerList() {
  let Container = styled.div`
    width: 100%;
    height: 302px;

    margin-top: 50px;
  `;
  let Title = styled.span`
    font-size: 16px;
    border-bottom: 1.5px solid red;
  `;
  let CellContainer = styled.div`
    margin-top: 16px;
  `;
  return (
    <Container>
      <Title>선수 명단</Title>
      <CellContainer>
        <PlayerListCell></PlayerListCell>
        <PlayerListCell></PlayerListCell>
      </CellContainer>
    </Container>
  );
}

export default PlayerList;
