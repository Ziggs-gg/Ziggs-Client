import React from 'react';
import '../App.css';
import styled from 'styled-components';
import PlayerList from './PlayerList';

function ShowPlayer (props){

  let Contain = styled.div`
    background: #131310;
    height: 100vh;
    width: 297px;
    overflow: scroll;
  `;

  let Maintitle = styled.div`
    display: flex;
    padding: 20px 0 0 25px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
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

  let Subcontain = styled.div`
    display: flex;
    margin: 40px 10px auto 26px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid;
    border-color: #c13631;
    overflow-x: scroll;
    white-space:nowrap;
  `;

  let Click = styled.button`
    background: #131310;
    margin: 0 8px 8px 0;
    height: 30px;
    width: 30px;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  return(
    <Contain>
      <Maintitle>
        <img src="../img/vector_17.svg" />
        <Title>선수보기</Title>
        <Close
          onClick={() => {
            props.setmodalPlayer(false);
          }}>
          <img src="../img/vector_36.svg" />
        </Close>
      </Maintitle>
      <Subcontain>
        <Click><img src="../img/LCK_Logo.svg" /></Click>
        <Click><img src="../img/LEC_Logo.svg" /></Click>
        <Click><img src="../img/LPL_Logo.svg" /></Click>
        <Click><img src="../img/LCS_Logo.svg" /></Click>
        <Click><img src="../img/CBLOL_Logo.svg" /></Click>
        <Click><img src="../img/LCL_Logo.svg" /></Click>
        <Click><img src="../img/LCO_Logo.svg" /></Click>
        <Click><img src="../img/LJL_Logo.svg" /></Click>
        <Click><img src="../img/LLA_Logo.svg" /></Click>
        <Click><img src="../img/PCS_Logo.svg" /></Click>
        <Click><img src="../img/TCL_Logo.svg" /></Click>
        <Click><img src="../img/VCS_Logo.svg" /></Click>
      </Subcontain>
      <Subcontain>
        <Click><img src="../img/TOP.svg" /></Click>
        <Click><img src="../img/JUG.svg" /></Click>
        <Click><img src="../img/MID.svg" /></Click>
        <Click><img src="../img/BOT.svg" /></Click>
        <Click><img src="../img/SUP.svg" /></Click>
      </Subcontain>
      <PlayerList />
    </Contain>
  );
}

export default ShowPlayer;