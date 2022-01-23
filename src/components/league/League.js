import react, { useState, useRef } from 'react';
import '../../App.css';
import styled from 'styled-components';
import SeasonData from '../../data/SeasonData.js';
import TeamData from '../../data/TeamData.js';
import SeasonButtonCell from './SeasonButtonCell';
import TeamLogoCell from './TeamLogoCell';
import ShowLeagueSchedule from './ShowLeagueSchedule';
import Standing from './Standing';
import ShowLeague from '../navbar/ShowLeague.js';
function League(props) {
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
  let Top_Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 137px;
  `;
  let Banner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `;
  let Divider = styled.div`
    width: 100%;
    background-color: #363634;
    border: 1.5px solid #363634;
  `;

  let LOGO = styled.img`
    margin-right: 22px;
  `;
  let Title = styled.div`
    display: flex;
  `;
  let LeagueTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 114px;
  `;
  let LeagueName = styled.span`
    margin-top: 25px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
  `;
  let SeasonName = styled.span`
    font-size: 30px;
    font-weight: 900;
  `;
  let Teams = styled.div`
    display: flex;
    flex-direction: column;
    width: 730px;
    height: 114px;
  `;
  let TeamsTextDiv = styled.div`
    display: flex;
    margin-top: 16px;
  `;
  let TeamsText1 = styled.span`
    text-align: left;
    font-size: 16px;
    width: 58px;
    height: 20px;
    border-bottom: 1px solid red;
    margin-right: 8px;
  `;
  let TeamsText2 = styled.span`
    display: flex;
    align-items: center;
    font-size: 12px;
  `;
  let TeamLogos = styled.div`
    display: flex;
    overflow-x: scroll;
    flex-direction: row;
    overflow-x: scroll;
    margin-top: 8px;
    align-items: center;
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  let [seasonData, setSeasonData] = useState(SeasonData);
  let [TeamsData, setTeamsData] = useState(TeamData);

  return (
    <div className="main-contain">
      <Seasons_selection>
        <Left_Buttons>
          <img src="../img/Arrows_Left.svg" width={24} />
          <img src="../img/Arrow_Left.svg" width={16} />
        </Left_Buttons>
        {seasonData.map((data, index) => {
          return <SeasonButtonCell seasons={data} index={index} key={index} />;
        })}
        <Right_Buttons>
          <img src="../img/Arrow_Right.svg" width={16} />
          <img src="../img/Arrows_Right.svg" width={24} />
        </Right_Buttons>
      </Seasons_selection>
      <Top_Banner>
        <Banner>
          <Title>
            <LOGO src="../img/LCK_Logo.svg" width={114} />
            <LeagueTitle>
              <LeagueName>League of Legends Champioship Korea</LeagueName>
              <SeasonName>LCK 2021 SPRING</SeasonName>
            </LeagueTitle>
          </Title>
          <Teams>
            <TeamsTextDiv>
              <TeamsText1>참가 팀</TeamsText1>
              <TeamsText2>10 팀</TeamsText2>
            </TeamsTextDiv>
            <TeamLogos>
              {TeamsData.map((data, index) => {
                return <TeamLogoCell teams={data} key={index} />;
              })}
            </TeamLogos>
          </Teams>
        </Banner>
        <Divider />
      </Top_Banner>
      <ShowLeagueSchedule />
      <Standing />
    </div>
  );
}

export default League;
