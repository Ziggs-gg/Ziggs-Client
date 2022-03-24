import React from 'react';
import styled from 'styled-components';
function ObjectCell({ objData: { id, score, objectType } }) {
  let ObjectCell = styled.div`
    display: flex;
    align-items: center;
    width: 43px;
    height: 34px;

    span {
      margin: 4px;
    }
  `;
  return (
    <ObjectCell>
      <span>{score}</span>
      <img alt={objectType} src={`../../../img/icon/${objectType}/Filled.svg`} />
    </ObjectCell>
  );
}
export default ObjectCell;
