import React, { useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import SeasonData from '../../data/SeasonData.js';
import SeasonButtonCell from '../league/SeasonButtonCell';
import PlayerList from '../team/PlayerList';
import TeamStat from '../team/TeamStat';
function Teams() {
  let Seasons_selection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 8px;
    cursor: pointer;
    z-index: 2;
  `;
  let Left_Buttons = styled.div`
    display: flex;
    padding-left: 16px;
    z-index: 2;
  `;
  let Right_Buttons = styled.div`
    display: flex;
    padding-right: 16px;
    z-index: 2;
  `;
  let Banner_BG = styled.div`
    position: absolute;
    top: 0;

    height: 284px;
    background-color: #c90128;
    filter: blur(32px);
    opacity: 0.1;
    z-index: 2;
  `;
  let Banner_container = styled.div`
    width: 100%;
    height: 284px;

    top: 0;
  `;
  let Banner_contents = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  `;
  let Banner_Logo = styled.div`
    background-image: url('../../img/teams-logo/T1.svg');
    width: 387px;
    height: 214px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: blur(10px);
    z-index: 2;
  `;
  let Team_Info_container = styled.div`
    display: flex;
    width: 462px;
    height: 114px;
    margin-right: 160px;
    z-index: 2;
  `;
  let Team_Logo_Info = styled.div`
    width: 114px;
    height: 114px;
    background-image: url('../../img/teams-logo/T1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin-left: 22px;
  `;
  let Team_Info_Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 326px;
    height: 114px;
  `;
  let Team_contact = styled.div`
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: space-between;
  `;
  let SNS_Icon_Cell = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(54, 54, 52, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  let SNS_Icon_Image = styled.img`
    width: 18px;
    height: 18px;
  `;
  let [seasonData, setSeasonData] = useState(SeasonData);
  return (
    <div className="main-contain">
      <Banner_BG></Banner_BG>
      <Banner_container>
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
            <img src="../img/icon/Arrow/Arrows_Right.svg" width={24} />
          </Right_Buttons>
        </Seasons_selection>
        <Banner_contents>
          <Banner_Logo />
          <Team_Info_container>
            <Team_Info_Text>
              <span style={{ fontSize: 18, fontWeight: 500 }}>LCK</span>
              <span style={{ fontSize: 30, fontWeight: 900 }}>T1</span>
              <span style={{ fontSize: 18, fontWeight: 500 }}>2021 SUMMER 정규시즌 00위 00승 - 00패</span>
              <Team_contact>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Teamswebsite.svg" />
                </SNS_Icon_Cell>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Twitch.svg" />
                </SNS_Icon_Cell>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Youtube.svg" />
                </SNS_Icon_Cell>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Instagram.svg" />
                </SNS_Icon_Cell>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Facebook.svg" />
                </SNS_Icon_Cell>
                <SNS_Icon_Cell>
                  <SNS_Icon_Image src="../../img/sns/Twitter.svg" />
                </SNS_Icon_Cell>
              </Team_contact>
            </Team_Info_Text>
            <Team_Logo_Info />
          </Team_Info_container>
        </Banner_contents>
      </Banner_container>
      <PlayerList />
      <TeamStat />
    </div>
  );
}
export default Teams;
