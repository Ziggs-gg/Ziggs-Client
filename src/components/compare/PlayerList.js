import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';

function PlayerList(){


  let PlayerSelectButton = styled.button`
    width: 114px;
    height: 52px;
    margin-right: 12px;
    margin-bottom: 8px;
    background: #131310;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
  `;

  let ButtonContain = styled.div`
    width: 90px;
    height: 30px;
    border: 1px solid #363634;
    border-radius: 20px;
    background-image: url('../../img/players/KHAN.svg');
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: center;
    text-align: left;
  `;

  let TeamLogo = styled.img`
    width: 16px;
    height: 16px;
    padding-top: 2px;
    padding-left: 10px;
  `;

  let PlayerName = styled.span`
    font-size: 12px;
    font-weight: 350;
    color: white;
  `;
  return(
      <PlayerSelectButton>
        <ButtonContain>
          <TeamLogo src='../../img/teams-logo/DWG.svg' alt='' />
        </ButtonContain>
        <PlayerName>KHAN</PlayerName>
      </PlayerSelectButton>
  );
}

export default PlayerList;