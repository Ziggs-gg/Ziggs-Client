import React,{ useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import ScheduleList from './ScheduleList'

function ScheduleDate(){

  let [asd,asdd] = useState(["asd","asdf"]);

  let Contain = styled.div`
    margin-right: 48px;

  `;

  let DateText = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  return(
    <Contain>
      <DateText>3월 26일 (금)</DateText>
      {asd.map((a,i)=>{
        return <ScheduleList asd={asd[i]} i={i} key={i}/>
      })}
    </Contain>
  );
}

export default ScheduleDate;