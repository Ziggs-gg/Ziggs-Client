import React from 'react';

function NavbarMain() {
  return (
    <div className="navbar-main">
      <div className="title">
        <img src="img/Logo.svg" />
        <span>ZIGGS.GG</span>
      </div>
      <div className="search-bar-container">
        <form action="">
          <div className="search-bar">
            <img src="img/Searching.svg" alt="" />
            <input type="text" placeholder="검색어를 입력해주세요." />
          </div>
        </form>
      </div>
      <ul className="menu-list">
        <li>
          <a href="#">
            <img src="img/Schedule.svg" />
            경기일정
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Stat_Comparisons.svg" />
            통계비교
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Leagues.svg" />
            리그보기
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Teams.svg" />
            구단보기
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/Players.svg" />
            선수보기
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMain;
