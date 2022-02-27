//각각의 컴포넌트마다 필요한 데이터를 넣어야함 그래서 각각 맞는 json파일을 import해야함
import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import Schedule from './Schedule';
import Data from '../../data.js';


function MainSchedule() {

  let MainScheduleContain = styled.div`
  width: 100%;
  `;

  let [match, matchchange] = useState(Data);

  return (
    <MainScheduleContain>
      {match.map((a, i) => {
        return <Schedule match={match[i]} i={i} key={i} />;
      })}
    </MainScheduleContain>
  );
}

export default MainSchedule;
