import React from 'react';
import '../App.css';
import styled from 'styled-components';

function ShowPlayer (){

  let Contain = styled.div`
  background: #131310;
  height: 100vh;
  width: 297px;
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
  background: black;
  margin-top: 10px;
  margin-left: 132px;
  padding: 10px;
  height: 10%;
  border: none;
  outline: none;
  cursor: pointer;
  `;

  return(
    <Contain>
      <Maintitle>
        <img src="../img/vector_17.svg"/><Title>선수보기</Title>
        <Close><img src="../img/vector_36.svg"/></Close>
      </Maintitle>
    </Contain>
  );
}

export default ShowPlayer;