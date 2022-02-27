import { React, useState } from 'react';
import '../../App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import League_Data from '../../data/LeagueData.js';
import { ReactComponent as AF } from '../../img/teams-logo/AF.svg';
import { ReactComponent as BRO } from '../../img/teams-logo/BRO.svg';
import { ReactComponent as DRX } from '../../img/teams-logo/DRX.svg';
import { ReactComponent as DWG } from '../../img/teams-logo/DWG.svg';
import { ReactComponent as GENG } from '../../img/teams-logo/GENG.svg';
import { ReactComponent as HLE } from '../../img/teams-logo/HLE.svg';
import { ReactComponent as KT } from '../../img/teams-logo/KT.svg';
import { ReactComponent as T1 } from '../../img/teams-logo/T1.svg';
import { ReactComponent as NS } from '../../img/teams-logo/NS.svg';
import { ReactComponent as SB } from '../../img/teams-logo/SB.svg';

function ShowTeam(props) {
  let Maintitle = styled.div`
    display: flex;
    padding: 5px 0 0 25px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  `;
  let Image = styled.div`
    display: flex;
    align-items: center;
    width: 24px;
    height: auto;
  `;
  let Title = styled.p`
    font-size: 18px;
    margin-left: 7px;
  `;
  let Close = styled.button`
    background: #131310;
    margin-top: 10px;
    margin-left: 132px;
    padding: 10px;
    height: 10%;
    border: none;
    outline: none;
    cursor: pointer;
  `;
  let UpperMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    margin-left: 25px;
    width: 250px;
    height: 38px;
    border-bottom: 1px solid red;
  `;
  let LeagueList = styled.div`
    display: flex;
    overflow-x: scroll;
    justify-content: left;
    align-items: center;
    ::-webkit-scrollbar {
      display: none;
    }
  `;
  let TeamButton = styled.button`
    background: #131310;
    margin: 0 8px 8px 0;
    height: 30px;
    width: 30px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let TeamList = styled.div`
    width: 250px;
    margin-left: 25px;
    margin-top: 25px;
  `;
  let TeamCell = styled.div`
    display: flex;
    margin-bottom: 24px;
    width: 250px;
    height: 48px;
  `;

  let CellText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  `;
  let CellTextLeague = styled.span`
    font-size: 12px;
    color: white;
    font-weight: 300;
  `;
  let CellTextTeams = styled.span`
    color: white;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
  `;

  const [leagueData, setleagueData] = useState(League_Data);

  return (
    <div className="navbar-contain">
      <Maintitle>
        <Image>
          <img src={require('../../img/icon/Teams/Two-Tone.svg').default} />
        </Image>
        <Title>구단보기</Title>
        <Close
          onClick={() => {
            props.setmodalTeam(false);
          }}>
          <img src={require('../../img/icon/Arrow/Arrows.svg').default} />
        </Close>
      </Maintitle>
      <UpperMenu>
        <LeagueList>
          {leagueData.map((league) => (
            <TeamButton>
              <img src={require(`../../img/league-logo/${league.name}_Logo.svg`).default} />
            </TeamButton>
          ))}
        </LeagueList>
      </UpperMenu>
      <TeamList>
        <TeamCell>
          <AF />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>Afreeca Freecs</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <BRO />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>Fredit BRION</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <DWG />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>DWG KIA</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <DRX />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>DRX</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <GENG />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>GEN.G</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <HLE />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>Hanhwa Life Esports</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <KT />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>KT Rolster</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <SB />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>Liiv SANDBOX</CellTextTeams>
          </CellText>
        </TeamCell>
        <TeamCell>
          <NS />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>NongShim REDFORCE</CellTextTeams>
          </CellText>
        </TeamCell>
        <Link to="/teams/T1">
          <TeamCell>
            <T1 />
            <CellText>
              <CellTextLeague>LCK</CellTextLeague>
              <CellTextTeams>T1</CellTextTeams>
            </CellText>
          </TeamCell>
        </Link>
      </TeamList>
    </div>
  );
}

export default ShowTeam;
