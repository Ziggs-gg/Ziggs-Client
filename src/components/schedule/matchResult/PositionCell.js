import React, { useState } from 'react';
import '../../../App.css';
import styled from 'styled-components';
function PositionCell() {
  let CellContainer = styled.div`
    width: 250px;
    height: 134px;
  `;
  let PositionImage = styled.img`
    width: 26px;
    height: 26px;
  `;
  let Players = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
  `;
  let KDA = styled.div``;
  return (
    <CellContainer>
      <PositionImage src="../../../img/position/TOP.svg" />
      <Players />
    </CellContainer>
  );
}
export default PositionCell;
