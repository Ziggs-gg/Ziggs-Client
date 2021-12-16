import React from 'react';
import '../App.css';
import styled from 'styled-components';

function TestCpn() {
  let bgImage = styled.img``;
  let MainContent = styled.div`
    color: white;
    overflow-y: scroll;
    height: 100vh;
    width: 100%;
    ::-webkit-scrollbar {
      display: auto;
    }
  `;
  return <img src="img/Schedule.svg" className="BGimage" />;
}
export default TestCpn;
