import React from 'react';
import '../../App.css';
import styled from 'styled-components';

function MatchSummury() {
  let Banner = styled.div``;
  let Back = styled.img`
    display: inline-block;
    margin-top: 24px;
    width: 24px;
    height: 24px;
  `;
  let Score_contain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  `;
  let TeamLogo = styled.img`
    width: 114px;
    height: 114px;
  `;
  let TeamLogo_contain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  let HomeTeamName = styled.span`
    margin-top: 8px;
    font-size: 30px;
    font-weight: 900;
  `;
  let Score = styled.span`
    width: 250px;
    height: 40px;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
  `;
  let Game_Selector = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    width: 100%;
    height: 30px;
    border-bottom: solid 3px #838381;
  `;
  let Game_select_button = styled.span`
    width: 250px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    margin-bottom: -3px;
    :hover {
      border-bottom: solid 3px red;
    }
  `;
  let Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    width: 100%;
    height: 100%;
  `;
  let BanPick = styled.div`
    width: 260px;
    height: auto;
    border-right: solid 0.5px #838381;
  `;
  let SideContentTitle = styled.span`
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid red;
  `;
  let Summury = styled.div`
    padding-left: 11px;
    width: 260px;
    height: auto;
    border-left: solid 0.5px #838381;
  `;
  let GameData = styled.div`
    width: auto;
  `;
  return (
    <div className="main-contain">
      <Banner>
        <Back src={require('../../img/icon/Arrow/Arrow_Left.svg').default} />
        <Score_contain>
          <TeamLogo_contain>
            <TeamLogo src={require('../../img/teams-logo/T1.svg').default}></TeamLogo>
            <HomeTeamName>T1</HomeTeamName>
          </TeamLogo_contain>
          <Score>2 - 0</Score>
          <TeamLogo_contain>
            <TeamLogo src={require('../../img/teams-logo/DWG.svg').default}></TeamLogo>
            <HomeTeamName>DWG</HomeTeamName>
          </TeamLogo_contain>
        </Score_contain>
      </Banner>
      <Game_Selector>
        <Game_select_button>GAME 1</Game_select_button>
        <Game_select_button>GAME 2</Game_select_button>
      </Game_Selector>
      <Content>
        <BanPick>
          <SideContentTitle>픽 & 밴</SideContentTitle>
        </BanPick>
        <GameData></GameData>
        <Summury>
          <SideContentTitle>요약</SideContentTitle>
        </Summury>
      </Content>
    </div>
  );
}

export default MatchSummury;
