import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';
import TeamList from './TeamList';
import TeamListPicks from './TeamListPicks';
import League_Data from '../../data/LeagueData.js';

function GroupCompare(props) {

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
    background: #131310;
    border-radius: 30px;
    text-align: center;
    width: 57px;
    height: 34px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let Group = styled.button`
    background: #C13631;
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

  let PositionSelect = styled.div`
    margin-left: 50px;
  `;

  let PositionImage = styled.img`
    width: 24px;
    height: 24px;
    margin-top: 16px;
    padding-right: 10px;
  `;

  let TeamListContain = styled.div`
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

const [leagueData, setleagueData] = useState(League_Data);

  return(
    <div>
      <SoloAndGroup>
        <Solo
          onClick={() => {
            props.setsolo(!props.solo)
            props.setgroup(false)
            
          }}>
          <IconImage src="../../img/icon/Players/Outlined.svg" />
        </Solo>
        <Group
          onClick={() => {
            props.setsolo(false)
            props.setgroup(!props.group)
          }}>
          <IconImage src="../../img/icon/Teams/Filled.svg" />
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
          {leagueData.map( league => 
            <LeagueImage src={`../../img/league-logo/${league.name}_Logo.svg`} />
            )}
        </LeagueSelect>
      </Filter>
      <TeamListContain>
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
        <TeamList />
      </TeamListContain>
      <PlayerListPicksContain>
        <TeamListPicks />
        <TeamListPicks />
        <TeamListPicks />
        <TeamListPicks />
      </PlayerListPicksContain>
    </div>
  );
}

export default GroupCompare;