import React from 'react';
import '../../App.css';
import styled from 'styled-components';
function PlayerListCell() {
  let Container = styled.div`
    background-image: url('../../img/T1_Canna.svg');
    background-repeat: no-repeat;
    background-position: right bottom;
    width: 250px;
    height: 125px;
    border: 1px solid #363634;
    border-radius: 20px;
    margin-bottom: 16px;
    margin-right: 22px;
  `;
  let Position = styled.img`
    margin-left: 16px;
    margin-top: 8px;
  `;
  let Text_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    margin-left: 16px;
  `;
  let Text_small = styled.span`
    font-size: 14px;
  `;
  let Text_large = styled.span`
    font-size: 16px;
    font-weight: 500;
  `;
  return (
    <Container>
      <Position src="../../img/position/Top.svg" />
      <Text_container>
        <Text_small>🇰🇷</Text_small>
        <Text_large>Canna</Text_large>
        <Text_small>김창동</Text_small>
      </Text_container>
    </Container>
  );
}

export default PlayerListCell;
