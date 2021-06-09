import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const isLogin = false;
  return (
    <div>
      <div>Logo</div>
      <ul>
        <li><NavLink exact to='/' >Home</NavLink></li>
        <li><NavLink exact to='/category' >Category</NavLink></li>
        <li><NavLink exact to='/mypage' >Mypage</NavLink></li>
        {isLogin ? <li><NavLink exact to='/play' >Play</NavLink></li> : <></>}
      </ul>
      {isLogin ? <div>Logout</div> : <div>Login</div> }
    </div>
  )
}

export default Nav;