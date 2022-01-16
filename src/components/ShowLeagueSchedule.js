import React,{ useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import ScheduleDate from './ScheduleDate';

function ShowLeagueSchedule() {

  let [asd,asdd] = useState(["asd","asdf","asd","asd","asd","asd","asd","asd","asd","asd"]);

  let Contain = styled.div`
    width: auto;
    overflow-x: scroll;
  `;
  //schedule list overflow scroll 문제점 해결좀 해주세요....
  let ScheduleContain = styled.div`
    display: flex;

  `;

  let Title = styled.span`
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1.5px solid #C13631;
  `;
  
  
  return(
    <Contain>
      <Title>경기 일정</Title>
      <ScheduleContain>
        {asd.map((a,i)=>{
          return <ScheduleDate asd={asd[i]} i={i} key={i} />
        })}
      </ScheduleContain>
    </Contain>
  );
}

export default ShowLeagueSchedule;