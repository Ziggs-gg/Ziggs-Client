import React from 'react';
import '../App.css';
import styled from 'styled-components';

import { ReactComponent as BG } from '../img/BG.svg';

import BG_Logo from '../img/BG_Logo.png';
function TestCpn() {
  let Banner = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: inherit;
    background-color: #5dc0c0;
    background-image: url('../img/BG_Logo.png');
    opacity: 0.1;
    filter: blur(32px);
  `;

  // let Background = styled(BG)`
  //   z-index: 1;

  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.2;

  //   path {
  //     fill: #5dc0c0;
  //   }
  //`;
  let TeamLogo = styled.img`
    z-index: 2;
    position: relative;
    width: 25%;
    height: auto;
  `;

  return (
    <div className="main-contain">
      <Banner></Banner>
      <TeamLogo src={BG_Logo} />
    </div>
  );
}
export default TestCpn;
