import React from 'react';
import styled from 'styled-components';

function DragonTimer() {
  let DragonTimer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    height: 24px;
  `;
  let Timer = styled.span`
    margin: 0px 24px;
    text-align: center;
  `;
  return (
    <DragonTimer>
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
      <Timer>36:17</Timer>
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
      <img src="../../../../img/icon/Drakes/Cloud Drake.svg" alt="Dragon" />
    </DragonTimer>
  );
}
export default DragonTimer;
