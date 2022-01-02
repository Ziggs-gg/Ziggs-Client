import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { ReactComponent as AF } from '../img/AF.svg';
import { ReactComponent as BRO } from '../img/BRO.svg';
import { ReactComponent as DRX } from '../img/DRX.svg';
import { ReactComponent as DWG } from '../img/DWG.svg';
import { ReactComponent as GENG } from '../img/GENG.svg';
import { ReactComponent as HLE } from '../img/HLE.svg';
import { ReactComponent as KT } from '../img/KT.svg';
import { ReactComponent as T1 } from '../img/T1.svg';
import { ReactComponent as NS } from '../img/NS.svg';
import { ReactComponent as SB } from '../img/SB.svg';
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
  let TeamButton = styled.span`
    margin-right: 8px;
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
  return (
    <div className="navbar-contain">
      <Maintitle>
        <Image>
          <img src="../img/Teams.svg" />
        </Image>
        <Title>구단보기</Title>
        <Close
          onClick={() => {
            props.setmodalTeam(false);
          }}>
          <img src="../img/vector_36.svg" />
        </Close>
      </Maintitle>
      <UpperMenu>
        <LeagueList>
          <TeamButton>
            <img src="../img/LCK_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LPL_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LEC_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LCS_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/CBLOL_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LCL_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LCO_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LJL_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/LLA_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/PCS_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/TCL_LOGO.svg" />
          </TeamButton>
          <TeamButton>
            <img src="../img/VCS_LOGO.svg" />
          </TeamButton>
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
        <TeamCell>
          <T1 />
          <CellText>
            <CellTextLeague>LCK</CellTextLeague>
            <CellTextTeams>T1</CellTextTeams>
          </CellText>
        </TeamCell>
      </TeamList>
    </div>
  );
}

export default ShowTeam;
