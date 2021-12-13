import React from 'react';
import '../App.css';
import styled from 'styled-components';
function ShowTeams() {
  let Contain = styled.div`
    background: #131310;
    height: 100vh;
    width: 297px;
    overflow: scroll;
  `;
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
  return (
    <Contain>
      <Maintitle>
        <Image>
          <img src="../img/Teams.svg" />
        </Image>
        <Title>구단보기</Title>
        <Close>
          <img src="../img/vector_36.svg" />
        </Close>
      </Maintitle>
    </Contain>
  );
}

export default ShowTeams;
