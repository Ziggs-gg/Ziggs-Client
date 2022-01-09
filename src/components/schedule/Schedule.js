import React,{ useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import DailyMatchList from './DailyMatchList';
import matchdata from '../../matchdata.js';


function Schedule(props) {

  let ScheduleContain = styled.div`
  color: #ffffff;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 40px;
  width: 1160px;
`;

  let Date = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 8px;
  `;

  let [timematch, timechange] = useState(matchdata);

  return(

    <ScheduleContain>
      <Date>{ props.match.month }월 { props.match.work }일 { props.match.day }</Date>
      {
        timematch.map((a,i)=>{
          return <DailyMatchList timematch={timematch[i]} i={i} key={i} />
        }
      )
    }
    </ScheduleContain>
  );
}

export default Schedule;