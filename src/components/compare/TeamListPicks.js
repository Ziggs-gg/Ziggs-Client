import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';

function TeamListPicks(){

  let PicksCotain = styled.div`
    display: flex;
    width: 791px;
    height: 50px;
    border: 1px solid #363634;
    border-radius: 0px 20px 20px 0px;
    border-left: 4px solid #C13631;
    margin-right: 22px;
    margin-bottom: 16px;
  `;

  let TeamLogo = styled.div`
    width: 114px;
    height: 50px;
    background-image: url('../../img/teams-logo/DWG.svg');
    background-repeat: no-repeat;
    background-size: 50px 66px;
    background-position: center;
  `;

  let TeamAndName = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    margin-bottom: 6px;
    margin: 6px 92px 6px 0;
  `;

  let LeagueName = styled.span`
    font-size: 12px;
    font-weight: 350;
    color: #838381;
    line-height: 17px;
  `;

  let TeamName = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  `;

  let Detail = styled.div`
    display: flex;
    align-items: center;
  `;

  let DetailContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    margin-right: 16px;
  `;

  let Text = styled.span`
    font-size: 12px;
    font-weight: 350;
    margin-bottom: 4px;
    line-height: 17px;
    align-items: center;
    text-align: center;
    color: #F3F3F3;
  `;

  const Delete = styled.button`
    background: #131310;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 220px;
  `
  const DeleteImg = styled.img`
    opacity: 0.5;
    :hover{
      opacity: 1;
    }
  `;

  return(
      <PicksCotain>
        <TeamLogo />
        <TeamAndName>
          <LeagueName>LCK</LeagueName>
          <TeamName>DWG KIA</TeamName>
        </TeamAndName>
        <Detail>
          <DetailContent>
            <Text>승</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>패</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>평균 게임시간</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>평균킬</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>평균데스</Text>
            <Text>000</Text>
          </DetailContent>
          <Delete>
            <DeleteImg src='../../img/icon/Vector_36.svg'></DeleteImg>
          </Delete>
        </Detail>
      </PicksCotain>
  );
}

export default TeamListPicks;