import React from 'react';
import '../App.css';
import styled from 'styled-components';

function ShowMatch(props) {
  let Image = styled.div`
    display: flex;
    align-items: center;
    width: 24px;
    height: auto;
  `;
  let Maintitle = styled.div`
    display: flex;
    padding: 5px 0 0 25px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
  `;
  let Title = styled.p`
    font-size: 18px;
    margin-left: 7px;
  `;

  let Close = styled.button`
    background: #131310;
    margin-top: 10px;
    margin-left: 132px;
    padding: 10px;
    height: 10%;
    border: none;
    outline: none;
    cursor: pointer;
  `;

  let Leaguetitle = styled.div`
    margin: 20px 10px auto 26px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid;
    border-color: #c13631;
  `;

  let Menu = styled.ul`
    list-style: none;
    margin: 0;
  `;

  let Menu_item = styled.li`
    padding: 8px 87px 0 70px;
  `;

  let Leaguename = styled.p`
    margin-left: 8px;
    font-size: 16px;
  `;

  let Go = styled.a`
    display: flex;
    text-decoration: none;
    color: white;
  `;

  return (
    <div className="navbar-contain">
      <Maintitle>
        <Image>
          <img src="../img/Schedule.svg" />
        </Image>
        <Title>경기일정</Title>
        <Close
          onClick={() => {
            props.setmodalMatch(false);
          }}>
          <img src="../img/vector_36.svg" />
        </Close>
      </Maintitle>
      <Leaguetitle>메이저리그</Leaguetitle>
      <Menu>
        <Menu_item>
          <Go href="">
            <img src="../img/LCK_Logo.svg" />
            <Leaguename>LCK</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LPL_Logo.svg" />
            <Leaguename>LPL</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LEC_Logo.svg" />
            <Leaguename>LEC</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LCS_Logo.svg" />
            <Leaguename>LCS</Leaguename>
          </Go>
        </Menu_item>
      </Menu>
      <Leaguetitle>마이너리그</Leaguetitle>
      <Menu>
        <Menu_item>
          <Go href="">
            <img src="../img/CBLOL_Logo.svg" />
            <Leaguename>CBLOL</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LCL_Logo.svg" />
            <Leaguename>LCL</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LCO_Logo.svg" />
            <Leaguename>LCO</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LJL_Logo.svg" />
            <Leaguename>LJL</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/LLA_Logo.svg" />
            <Leaguename>LLA</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/PCS_Logo.svg" />
            <Leaguename>PCS</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/TCL_Logo.svg" />
            <Leaguename>TCL</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/VCS_Logo.svg" />
            <Leaguename>VCS</Leaguename>
          </Go>
        </Menu_item>
      </Menu>
      <Leaguetitle>국제대회</Leaguetitle>
      <Menu>
        <Menu_item>
          <Go href="">
            <img src="../img/MSI_Logo.svg" />
            <Leaguename>MSI</Leaguename>
          </Go>
        </Menu_item>
        <Menu_item>
          <Go href="">
            <img src="../img/WORLDS_Logo.svg" />
            <Leaguename>WORLDS</Leaguename>
          </Go>
        </Menu_item>
      </Menu>
    </div>
  );
}

export default ShowMatch;
