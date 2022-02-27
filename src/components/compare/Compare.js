import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';
import SoloCompare from './SoloCompare.js'
import GroupCompare from './GroupCompare';


function Compare() {

  let SoloAndGroup = styled.div`
    display: flex;
    border: 0.5px solid #363634;
    border-radius: 30px;
    width: 114px;
    height: 34px;
    margin-left: 25px;
    margin-top: 20px;
  `;

  let Solo = styled.button`
    background: #C13631;
    border-radius: 30px;
    text-align: center;
    width: 57px;
    height: 34px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let Group = styled.button`
    background: #131310;
    border-radius: 30px;
    text-align: center;
    width: 57px;
    height: 34px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let IconImage = styled.img`
    padding-top: 5px;
  `;

  const [solo,setsolo] = useState(true);
  const [group,setgroup] = useState(false);


  return(
    <div className='main-contain'>
      {solo == true ? <SoloCompare solo={solo} group={group} setsolo={setsolo} setgroup={setgroup}/> : null}
      {group == true ? <GroupCompare solo={solo} group={group} setsolo={setsolo} setgroup={setgroup} /> : null}
    </div>
  );
}

export default Compare;