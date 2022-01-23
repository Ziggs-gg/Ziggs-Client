import React from 'react';
import '../../App.css';
import styled from 'styled-components';

let CellContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-left: 25px;
  margin-bottom: 16px;
  width: 250px;
  height: 48px;
`;
let CellLogo = styled.img``;
let CellText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
let CellTextName = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
`;
let CellTextNation = styled.span`
  font-size: 12px;
  color: white;
  font-weight: 300;
`;
function SubNavBarCell_League(props) {
  return (
    <CellContainer>
      <CellLogo src={`../img/${props.leagues.name}_Logo.svg`} width={24} />
      <CellText>
        <CellTextName>{props.leagues.name}</CellTextName>
        <CellTextNation>{props.leagues.nation}</CellTextNation>
      </CellText>
    </CellContainer>
  );
}
export default SubNavBarCell_League;
