import React from 'react';
import '../App.css';


function SubNavbar() {
  
  return(
    <div className="subnavbar">
      <div className="nav"><img src="../img/vector_17.svg"/>리그보기</div>
      <button className="close"><img src="../img/vector_36.svg"/></button>
      <ul className="major">
        <li><a href=""><img src="../img/LCK_Logo.svg" />LCK</a></li>
        <li><a href=""><img src="../img/LPL_Logo.svg" />LPL</a></li>
        <li><a href=""><img src="../img/LEC_Logo.svg" />LEC</a></li>
        <li><a href=""><img src="../img/LCS_Logo.svg" />LCS</a></li>
      </ul>
      <ul className="minor">
        <li><a href=""></a></li>
      </ul>
    </div>
  );
}

export default SubNavbar;