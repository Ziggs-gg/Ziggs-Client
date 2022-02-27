import React, { useState, useRef } from 'react';
import '../../App.css';
import styled from 'styled-components';
import SeasonButtonCell from './SeasonButtonCell';
import SeasonData from '../../data/SeasonData.js';

function Player(){

  const Background_Color = styled.div`
    position: absolute;
    top: 0;
    background: #5DC0C0;
    mix-blend-mode: soft-light;
    filter: blur(32px);
    width: 90em;
    height: 300px;
  `;

  let Seasons_selection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 8px;
`;

let Left_Buttons = styled.div`
  display: flex;
  padding-left: 16px;
`;

let Right_Buttons = styled.div`
  display: flex;
  padding-right: 16px;
`;

let Player_profile_Image = styled.div`
  display: flex;
  justify-content: center;
  height: 214px;
  padding-top: 33px;
`;

let Player_Profile = styled.div`
  position: static;
  display: flex;
  flex-direction: column;
  padding-top: 67px;
  padding-left: 544px;
  padding-bottom: 67px;
`;

let Team_Logo = styled.div`
  width: 387px;
  height: 214px;
  background-image: url('../img/DWG.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: blur(10px);
`;

let Team_Name = styled.span`
  font-size: 18px;
  font-weight: 500;
  padding-left: 40px;
  z-index: 1;
`;

let Position_Image = styled.img`
  padding-top: 10px;
`;

let Player_Nikname = styled.span`
  font-size: 30px;
  font-weight: 900;
  margin-top: -15px;
  margin-bottom: -10px;
  z-index: 1;
`;

let Player_Name = styled.span`
  font-size: 18px;
  font-weight: 500;
  padding-left: 80px;
  z-index: 1;
`;

let Player_Image = styled.img`
  width: 250px;
  height: 188px;
  z-index: 1;
`;

let Data_Contain_first = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 47px;
`;

let Radar = styled.div`
  background: #C4C4C4;
  width: 368px;
  height: 379px;
  margin-right: 22px;
`;

let Indicators = styled.div`
  background: #C4C4C4;
  width: 930px;
  height: 379px;
  margin-right: 25px;
`;

let Datat_Contain_Scond = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: 25px;
`;

let Champion = styled.div`
  background: #C4C4C4;
  width: 522px;
  height: 379px;
  margin-right: 37px;
`;

let TimeLine = styled.div`
  background: #C4C4C4;
  width: 779px;
  height: 310px;
`;

let [seasonData, setSeasonData] = useState(SeasonData);
  return(
    <div className ="main-contain">
      <Seasons_selection>
        <Left_Buttons>
          <img src="../../img/icon/Arrow/Arrows_Left.svg" width={24} />
          <img src="../../img/icon/Arrow/Arrow_Left.svg" width={16} />
        </Left_Buttons>
        {seasonData.map((data, index) => {
          return <SeasonButtonCell seasons={data} index={index} key={index} />;
        })}
        <Right_Buttons>
          <img src="../../img/icon/Arrow/Arrow_Right.svg" width={16} />
          <img src="../../img/icon/Arrow/Arrows_Right.svg" width={24} />
        </Right_Buttons>
      </Seasons_selection>
      <Player_profile_Image>
        <Team_Logo />
        <Player_Profile>
          <Team_Name>LCK - DWG KIA</Team_Name>
          <Player_Nikname>
            <Position_Image src ="../../img/position/TOP.svg" alt='' />DK KHAN
          </Player_Nikname>
          <Player_Name>🇰🇷 김동하</Player_Name>
        </Player_Profile>
        <Player_Image src='../../img/players/KHAN.svg' alt='' />
      </Player_profile_Image>
      <Data_Contain_first>
        <Radar>
          레이더그래프 영역
        </Radar>
        <Indicators>
          지표별 데이터 대시보드 영역
        </Indicators>
      </Data_Contain_first>
      <Datat_Contain_Scond>
        <Champion>
          챔피언 풀 영역
        </Champion>
        <TimeLine>
          게임별, 주차별, 패치별  지표 타임라인 영역
        </TimeLine>
      </Datat_Contain_Scond>
    </div>
  );
}

export default Player;