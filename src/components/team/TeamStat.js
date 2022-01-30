import React from 'react';
import '../../App.css';
import styled from 'styled-components';
function TeamStat() {
  let Container = styled.div`
    width: 100%;
    height: 302px;

    margin-top: 50px;
  `;
  let Title = styled.span`
    font-size: 16px;
    border-bottom: 1.5px solid red;
  `;
  let Contents = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 16px;
  `;
  let TeamData = styled.div`
    width: 600px;
    height: 600px;
    background-color: #c4c4c4;
  `;
  return (
    <Container>
      <Title>구단통계</Title>
      <Contents>
        <TeamData></TeamData>
        <TeamData></TeamData>
      </Contents>
    </Container>
  );
}
export default TeamStat;
