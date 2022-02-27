import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';
import PlayerList from './PlayerList';
import PlayerListPicks from './PlayListPicks';
import League_Data from '../../data/LeagueData.js';
import Position_Data from '../../data/Position.js';

function SoloCompare(props) {

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

  let Filter = styled.div`
    display: flex;
    border-bottom: 0.5px solid #F3F3F3;
    opacity: 0.6;
    padding-bottom: 8px;
    margin-bottom: 16px;
  `;

  let YearSelect = styled.select`
    width: 114px;
    height: 24px;
    margin-top: 16px;
    margin-left: 25px;
    background: #363634;
    border-radius: 20px;
    color: white;
    text-align: center;
  `;

  let SeasonSelect = styled.select`
    width: 114px;
    height: 24px;
    margin-top: 16px;
    margin-left: 23px;
    background: #363634;
    border-radius: 20px;
    color: white;
    text-align: center;
  `;

  let LeagueSelect = styled.div`
    margin-left: 25px;
  `;

  let LeagueImage = styled.img`
    width: 24px;
    height: 24px;
    margin-top: 16px;
    padding-right: 10px;
  `;

  let Btn = styled.button`
    background: #131310;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
  `;

  let PositionSelect = styled.div`
    margin-left: 50px;
  `;

  let PositionImage = styled.img`
    width: 24px;
    height: 24px;
    margin-top: 16px;
    padding-right: 10px;
  `;

  let PlayerListContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 100%;
    height: auto;
    border-bottom: 3px solid #363634;
    padding-bottom: 8px;
    margin-bottom: 16px;
  `;

  let PlayerListPicksContain = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `;
  
  let Test = styled.div`
    
  `;

const [leagueData, setleagueData] = useState(League_Data);
const [positionData, setpositionData] = useState(Position_Data);
const [color,setColor] = useState('#131310');
const select = new Set();
console.log(select);
/*
const onClick = () => {
  color === '#131310' ? setColor('#C13631') : setColor('#131310');
  select.add(LeagueImage.value);
  console.log(select);
}
*/
  return(
    <div>
      <SoloAndGroup>
        <Solo
          onClick={() => {
            props.setsolo(!props.solo)
            props.setgroup(false)
            
          }}>
          <IconImage src="../../img/icon/Players/Filled.svg" />
        </Solo>
        <Group
          onClick={() => {
            props.setsolo(false)
            props.setgroup(!props.group)
          }}>
          <IconImage src="../../img/icon/Teams/Outlined.svg" />
        </Group>
      </SoloAndGroup>
      <Filter>
        <YearSelect>
          <option value={''}>연도</option>
          <option value={'2021'}>2021</option>
          <option value={'2020'}>2020</option>
        </YearSelect>
        <SeasonSelect>
          <option value={''}>시즌</option>
          <option value={'Spring'}>Spring</option>
          <option value={'Summer'}>Summer</option>
        </SeasonSelect>
        <LeagueSelect>
        {leagueData.map( (league,i) => 
            <Btn onClick={()=>{
              
              select.add(league.name)
            }}><LeagueImage src={`../../img/league-logo/${league.name}_Logo.svg`} /></Btn>
            )}
        </LeagueSelect>
        <PositionSelect>
          {positionData.map( position =>
            <PositionImage src={`../../img/position/${position.position}.svg`} />
          )}
        </PositionSelect>
      </Filter>
      <PlayerListContain>
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
        <PlayerList />
      </PlayerListContain>
      <PlayerListPicksContain>
        <PlayerListPicks />
        <PlayerListPicks />
        <PlayerListPicks />
        <PlayerListPicks />
      </PlayerListPicksContain>
    </div>
  );
}

export default SoloCompare;