import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import ScheduleList from './ScheduleList';
import Data from '../../data/matchData.js';
function ScheduleDate() {
  let [match, setMatch] = useState(Data);
  let Contain = styled.div`
    margin-right: 48px;
  `;

  let DateText = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 16px;
  `;
  return (
    <Contain>
      <DateText>3월 26일 (금)</DateText>
      {match.map((data, i) => {
        return <ScheduleList match={data} i={i} key={i} />;
      })}
    </Contain>
  );
}

export default ScheduleDate;
