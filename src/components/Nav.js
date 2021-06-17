import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Nav({ isLogin, handleLogout }) {

  
  return (
    <div className="NavOut">
      <div className="Nav">
        <div className='NavLogo'><img src='/logo1-1.png' alt='alt'></img></div>
        <ul>
          <li>
            <NavLink exact to="/" className="textLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/category" className="textLink">
              Category
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/mypage" className="textLink">
              Mypage
            </NavLink>
          </li>
          {isLogin ? (
            <>
              <li>
                <NavLink exact to="/favorite" className="textLink">
                  Favorite
                </NavLink>
              </li>
              <li style={{
                width: "100px"
              }}>
                <NavLink exact to="/play" className="textLink">
                  Play
                </NavLink>
              </li>{' '}
            </>
          ) : (
            <></>
          )}
        </ul>
        {isLogin ? (
          <div className="LogOutBtn" onClick={handleLogout}>
            LogOut
          </div>
        ) : (
          <div className="LogInBtn">
            <Link to="/signin" className="textLink">
              LogIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
