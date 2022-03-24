import React from 'react';
import styled from 'styled-components';
import ObjectCell from './ObjectCell';
import DragonTimer from './DragonTimer';
import objectData from '../data/objectData';
function GameObject() {
  let GameObjectContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 11px;
  `;
  let TeamsName = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `;
  let RedTeam = styled.div`
    width: 50%;
    height: 100%;
    text-align: right;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 3px solid #3173c1;
  `;
  let BlueTeam = styled.div`
    width: 50%;
    height: 100%;
    text-align: left;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 3px solid #c13631;
  `;
  let ObjectInfo = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 0px 34px;
    width: 100%;
    height: 26px;
  `;
  const objData = objectData;
  return (
    <GameObjectContainer>
      <TeamsName>
        <RedTeam>T1</RedTeam>
        <BlueTeam>DWG</BlueTeam>
      </TeamsName>
      <ObjectInfo className="ObjectInfo">
        {objData.map((item, index) => {
          return <ObjectCell key={index} objData={item} />;
        })}
      </ObjectInfo>
      <DragonTimer />
    </GameObjectContainer>
  );
}
export default GameObject;
