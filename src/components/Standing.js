import React,{ useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import TeamStanding from './TeamStanding';
import MvpStanding from './MvpStanding';

function Standing() {

  let Contain = styled.div`
    margin-top: 40px;
  `;

let Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1.5px solid #C13631;
`;

let TeamAndMvpContain = styled.div`
  display: flex;
`;

  return(
    <Contain>
      <Title>순위표</Title>
      <TeamAndMvpContain>
        <TeamStanding />
        <MvpStanding />
      </TeamAndMvpContain>
    </Contain>
  );
}

export default Standing;