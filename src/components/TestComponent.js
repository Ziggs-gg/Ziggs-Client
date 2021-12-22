import React from 'react';
import '../App.css';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../img/Arrow_Down.svg';
import { ReactComponent as Schedule } from '../img/Schedule.svg';
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
  let Icon = styled(Arrow)`
    :hover {
      path {
        stroke: red;
      }
    }
    path {
      stroke: white;
    }
  `;
  let Schedule1 = styled(Schedule)`
    :hover {
      path,
      rect {
        stroke: red;
      }
    }
    path,
    rect {
      stroke: #f3f3f3;
    }
  `;
  return (
    <>
      <Schedule1 width={100} height={100} />
      <Icon width="100" height="100" fill="red" />
      <Arrow width="100" height="100" fill="red" />
    </>
  );
}
export default TestCpn;
