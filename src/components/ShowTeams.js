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
  let Title = styled.div`
    width: 102px;
    height: 26px;
    margin-top: 20px;
    margin-left: 20px;
  `;
  return <Contain></Contain>;
}

export default ShowTeams;
