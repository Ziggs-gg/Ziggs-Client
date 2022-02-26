import {React,useState} from 'react';
import '../../App.css';
import styled from 'styled-components';
import PlayerList from './PlayerList';
import League_Data from '../../data/LeagueData.js';
import Position_Data from '../../data/Position.js';
function ShowPlayer(props) {
  let Contain = styled.div`
    background: #131310;
    height: 100vh;
    width: 297px;
    overflow: scroll;
  `;
  let Image = styled.div`
    display: flex;
    align-items: center;
    width: 24px;
  `;
  let Maintitle = styled.div`
    display: flex;
    padding: 5px 0 0 25px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  `;
  let Title = styled.p`
    font-size: 18px;
    margin-left: 7px;
  `;

  let Close = styled.button`
    background: #131310;
    margin-top: 10px;
    margin-left: 132px;
    padding: 10px;
    height: 10%;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let Subcontain = styled.div`
    display: flex;
    margin: 40px 10px auto 26px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid;
    border-color: #c13631;
    overflow-x: scroll;
    white-space: nowrap;
  `;

  let Click = styled.button`
    background: #131310;
    margin: 0 8px 8px 0;
    height: 30px;
    width: 30px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  const [leagueData, setleagueData] = useState(League_Data);
  const [positionData, setpositionData] = useState(Position_Data);

  return (
    <div className='navbar-contain'>
      <Maintitle>
        <Image>
          <img src={require("../../img/icon/Players/Two-Tone.svg").default} />
        </Image>
        <Title>선수보기</Title>
        <Close
          onClick={() => {
            props.setmodalPlayer(false);
          }}>
          <img src={require("../../img/icon/Arrow/Arrows.svg").default} />
        </Close>
      </Maintitle>
      <Subcontain>
        {leagueData.map( league =>
            <Click>
              <img src={require(`../../img/league-logo/${league.name}_Logo.svg`).default} />
            </Click>
        )}
      </Subcontain>
      <Subcontain>
        {positionData.map( positions =>
              <Click>
                <img src={require(`../../img/position/${positions.position}.svg`).default} />
              </Click>
        )}
      </Subcontain>
      <PlayerList />
    </div>
  );
}

export default ShowPlayer;
