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
    height: auto;
  `;
  let BanPick = styled.div`
    width: 260px;
    height: auto;
    border-right: solid 0.5px #838381;
    padding-right: 11px;
  `;
  let BanPickPhase1Container = styled.div`
    width: 260px;
    height: 205px;
    margin-top: 16px;
    border-bottom: 1px gray solid;
  `;
  let BanPickInfo1 = styled.div`
    width: 260px;
    height: 168px;
    margin-top: 8px;
  `;
  let ChampInfoRight = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `;
  let ChampInfoleft = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  `;

  let BanPickPhase2Container = styled.div`
    width: 260px;
    height: 148px;
    margin-top: 16px;
    border-bottom: 1px gray solid;
  `;
  let BanPickInfo2 = styled.div`
    width: 260px;
    height: 112px;
    margin-top: 8px;
  `;
  let PositionSummury = styled.div`
    width: 260px;
    height: 134px;
    margin-bottom: 16px;
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
    height: auto;
  `;
  let ObjectSummury = styled.div`
    width: auto;

    margin-bottom: 16px;
  `;
  let StatsDetail = styled.div`
    width: auto;
  `;
  let BanPickText = styled.span`
    font-size: 14px;
  `;
  let ChampIcon = styled.img`
    width: 28px;
    height: 28px;
  `;
  let ChampIconLeft = styled.img`
    width: 28px;
    height: 28px;
    margin-right: 8px;
  `;
  let ChampIconRight = styled.img`
    width: 28px;
    height: 28px;
    margin-left: 8px;
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
          <BanPickPhase1Container>
            <BanPickText>밴 페이즈 1</BanPickText>
            <BanPickInfo1>
              <ChampInfoRight>
                <ChampIconLeft src="../../img/InGame/champion/Ziggs.png" />
                사미라
              </ChampInfoRight>
              <ChampInfoleft>
                그라가스
                <ChampIconRight src="../../img/InGame/champion/Ziggs.png" />
              </ChampInfoleft>
              <ChampInfoRight>
                <ChampIconLeft src="../../img/InGame/champion/Ziggs.png" />
                아칼리
              </ChampInfoRight>
              <ChampInfoleft>
                판테온
                <ChampIconRight src="../../img/InGame/champion/Ziggs.png" />
              </ChampInfoleft>
              <ChampInfoRight>
                <ChampIconLeft src="../../img/InGame/champion/Ziggs.png" />
                올라프
              </ChampInfoRight>
              <ChampInfoleft>
                레넥톤
                <ChampIconRight src="../../img/InGame/champion/Ziggs.png" />
              </ChampInfoleft>
            </BanPickInfo1>
          </BanPickPhase1Container>
          <BanPickPhase1Container>
            <BanPickText>픽 페이즈 1</BanPickText>
          </BanPickPhase1Container>
          <BanPickPhase2Container>
            <BanPickText>밴 페이즈 2</BanPickText>

            <ChampInfoleft>
              레넥톤
              <ChampIconRight src="../../img/InGame/champion/Ziggs.png" />
            </ChampInfoleft>
            <ChampInfoRight>
              <ChampIconLeft src="../../img/InGame/champion/Ziggs.png" />
              올라프
            </ChampInfoRight>
            <ChampInfoleft>
              레넥톤
              <ChampIconRight src="../../img/InGame/champion/Ziggs.png" />
            </ChampInfoleft>
            <ChampInfoRight>
              <ChampIconLeft src="../../img/InGame/champion/Ziggs.png" />
              올라프
            </ChampInfoRight>
          </BanPickPhase2Container>

          <BanPickPhase2Container>
            <BanPickText>픽 페이즈 2</BanPickText>
          </BanPickPhase2Container>
        </BanPick>
        <GameData>
          <ObjectSummury></ObjectSummury>
          <StatsDetail></StatsDetail>
        </GameData>
        <Summury>
          <SideContentTitle>요약</SideContentTitle>
          <PositionSummury></PositionSummury>
          <PositionSummury></PositionSummury>
          <PositionSummury></PositionSummury>
          <PositionSummury></PositionSummury>
          <PositionSummury></PositionSummury>
        </Summury>
      </Content>
    </div>
  );
}

export default MatchSummury;
