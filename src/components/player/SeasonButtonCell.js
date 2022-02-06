import React, { useState, useRef } from 'react';
import '../../App.css';
import styled from 'styled-components';

function SeasonButtonCell(props) {
  let CellContainer = styled.div`
    display: flex;
    width: 120px;
    height: 34px;
    opacity: 0.5;
    flex-direction: column;
    align-items: center;
    :hover {
      border-bottom: 1px solid red;
      opacity: 1;
    }
  `;
  let CellText = styled.span`
    font-size: 12px;
    font-weight: 500;
  `;

  return (
    <CellContainer>
      <CellText>{props.seasons.year}</CellText>
      <CellText>{props.seasons.season}</CellText>
    </CellContainer>
  );
}
export default SeasonButtonCell;
