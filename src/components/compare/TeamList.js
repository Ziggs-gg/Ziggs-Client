import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';

function TeamList(){


  let TeamSelectButton = styled.button`
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
    background-image: url('../../img/teams-logo/AF.svg');
    background-repeat: no-repeat;
    background-size: 40px;
    background-position: center;
    text-align: left;
  `;

  let LeagueLogo = styled.img`
    width: 16px;
    height: 16px;
    padding-top: 2px;
    padding-left: 10px;
  `;

  let TeamName = styled.span`
    font-size: 12px;
    font-weight: 350;
    color: white;
  `;
  return(
      <TeamSelectButton>
        <ButtonContain>
          <LeagueLogo src='../../img/league-logo/LCK_Logo.svg' alt='' />
        </ButtonContain>
        <TeamName>Afreeca Freecs</TeamName>
      </TeamSelectButton>
  );
}

export default TeamList;