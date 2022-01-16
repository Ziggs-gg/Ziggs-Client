import React from 'react';
import '../../App.css';
import styled from 'styled-components';

function TeamLogoCell(props) {
  let CellContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    //width: 63px;
    //height: 53px;
    padding: 8px 8px;
    border: 1px solid #363634;
    border-radius: 20px;
    margin-right: 20px;
  `;
  let Logo = styled.img``;
  return (
    <CellContainer>
      <Logo src={`../../img/${props.teams.short_name}.svg`} width={40} />
    </CellContainer>
  );
}
export default TeamLogoCell;
