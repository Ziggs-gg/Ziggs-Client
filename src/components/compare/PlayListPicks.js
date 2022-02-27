import React, { useState} from 'react';
import '../../App.css';
import styled from 'styled-components';

function PlayerListPicks(){

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

  let PlayerAndLogo = styled.div`
    width: 114px;
    height: 50px;
    background-image: url('../../img/players/KHAN.svg');
    background-repeat: no-repeat;
    background-size: 65px 50px;
    background-position: center;
  `;

  let TeamImg = styled.img`
    width: 16px;
    height: 16px;
    margin: 3px 88px 31px 10px;
  `;

  let TeamAndName = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 6px;
    margin-bottom: 6px;
    margin: 6px 92px 6px 0;
  `;

  let TeamName = styled.span`
    font-size: 12px;
    font-weight: 350;
    color: #838381;
    line-height: 17px;
  `;

  let PlayerName = styled.span`
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
  
  let ChampionContain = styled.div`

  `;

  let ImgContain = styled.div`
    
  `

  let ChampionImg = styled.img`
    width: 17px;
    height: 17px;
    margin: 0 2px;
  `;

  const Delete = styled.button`
  background: #131310;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  `
  const DeleteImg = styled.img`
  opacity: 0.5;
  :hover{
    opacity: 1;
  }
  `;

  return(
      <PicksCotain>
        <PlayerAndLogo>
          <TeamImg src='../../img/teams-logo/DWG.svg' />
        </PlayerAndLogo>
        <TeamAndName>
          <TeamName>DWG KIA</TeamName>
          <PlayerName>KHAN</PlayerName>
        </TeamAndName>
        <Detail>
          <DetailContent>
            <Text>평균킬</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>평균데스</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>평균어시스트</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>분당골드획득</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>분당CS처치</Text>
            <Text>000</Text>
          </DetailContent>
          <DetailContent>
            <Text>분당데미지</Text>
            <Text>000</Text>
          </DetailContent>
          <ChampionContain>
            <Text>선호챔피언</Text>
            <ImgContain>
              <ChampionImg src='../../img/sns/Instagram.svg' />
              <ChampionImg src='../../img/sns/Instagram.svg' />
              <ChampionImg src='../../img/sns/Instagram.svg' />
              <ChampionImg src='../../img/sns/Instagram.svg' />
              <ChampionImg src='../../img/sns/Instagram.svg' />
            </ImgContain>
          </ChampionContain>
          <Delete onClick={() => {
            
          }}>
            <DeleteImg src='../../img/icon/Vector_36.svg'/>
          </Delete>
        </Detail>
      </PicksCotain>
  );
}

export default PlayerListPicks;