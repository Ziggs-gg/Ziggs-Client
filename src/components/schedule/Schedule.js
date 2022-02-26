import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import DailyMatchList from './DailyMatchList';
import matchdata from '../../matchdata.js';
import { Link } from 'react-router-dom';

function Schedule(props) {
  let ScheduleContain = styled.div`
    color: #ffffff;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 40px;
  `;

  let Date = styled.div`
    font-weight: 900;
    font-size: 20px;
    padding-bottom: 8px;
    border-bottom: solid 1px #838381;
  `;

  let [timematch, timechange] = useState(matchdata);

  return (
    <ScheduleContain>
      <Date>
        {props.match.month}월 {props.match.work}일 {props.match.day}
      </Date>
      {timematch.map((a, i) => {
        return (
          <Link to="/">
            <DailyMatchList timematch={timematch[i]} i={i} key={i} />
          </Link>
        );
      })}
    </ScheduleContain>
  );
}

export default Schedule;
