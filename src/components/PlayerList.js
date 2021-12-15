import React from 'react';
import '../App.css';
import styled from 'styled-components';

let Contain = styled.div`
  margin-top: 30px;
  margin-left: 25px;
  margin-right: 22px;
  width: 250px;
  height: 48px;
`;

let Playerlist = styled.div`
  display: flex;
  width: 250px;
  height: 48px;
  margin-bottom: 25px;
`;

let TextContain = styled.div`
  display: flex;
  flex-direction: column;
  width: 98px;
  margin-left: 10px;
  margin-right: 42px;
  padding-top: 6px;
`;

let CellTextRole = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
`;

let CellTextPlayerName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

function PlayerList(){
  return(
    <Contain>
      <Playerlist>
        <img src="../img/AF.svg"></img>
        <TextContain>
          <CellTextRole>Role</CellTextRole>
          <CellTextPlayerName>Player Name</CellTextPlayerName>
        </TextContain>
        <img src="../img/teamlogo.svg"></img>
      </Playerlist>
      <Playerlist>
        <img src="../img/AF.svg"></img>
        <TextContain>
          <CellTextRole>Role</CellTextRole>
          <CellTextPlayerName>Player Name</CellTextPlayerName>
        </TextContain>
        <img src="../img/teamlogo.svg"></img>
      </Playerlist>
      <Playerlist>
        <img src="../img/AF.svg"></img>
        <TextContain>
          <CellTextRole>Role</CellTextRole>
          <CellTextPlayerName>Player Name</CellTextPlayerName>
        </TextContain>
        <img src="../img/teamlogo.svg"></img>
      </Playerlist>
    </Contain>
  );
}

export default PlayerList;