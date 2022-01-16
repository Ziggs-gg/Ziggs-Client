import React from 'react';
import '../../App.css';
import styled from 'styled-components';

function SeasonButtonCell(props) {
  let CellContainer = styled.div`
    display: flex;
    width: 120px;
    height: 34px;
    flex-direction: column;
    align-items: center;
  `;
  let CellText = styled.span`
    font-size: 12px;
  `;
  return (
    <CellContainer>
      <CellText>{props.seasons.year}</CellText>
      <CellText>{props.seasons.season}</CellText>
    </CellContainer>
  );
}
export default SeasonButtonCell;
