import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import axios from 'axios';
import BackGroundVideo2 from '../video/background2.mp4';
import GoogleLogo from '../icon/google.png';

function SignIn(props) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const login = () => {
    if (id === '' || password === '') {
      console.log('아이디나 패스워드를 입력해주세요');
      return;
    } else {
      props.handleResponseSuccess();
      props.history.push('/');
    }
  };

  //axios 코드 추가
  //   axios
  //   .post(
  //     'https://localhost:80/user/signin',
  //     {
  //       email: id,
  //       password: password,
  //     },
  //     {
  //       'Content-Type': 'application/json',
  //       withCredentials: true,
  //     },
  //   )
  //   .then((data) => {
  //     console.log('data === ', data);
  //     props.handleResponseSuccess(data);
  //     props.history.push('/');
  //   });
  // };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="SignIn">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="SignInUl">
          <li>MEMBER LOGIN</li>
          <li>
            <div className="UserNameIcon"></div>
            <input
              value={id}
              onChange={handleId}
              placeholder="Username"
            ></input>
          </li>
          <li>
            <div className="PasswordIcon"></div>
            <input
              type="password"
              onChange={handlePassword}
              placeholder="Password"
              autoComplete="on"
            ></input>
          </li>
          <li>
            <button type="submit" className="SignInBtn" onClick={login}>
              LogIn
            </button>
          </li>
          <li>
            <div>
              <div className="LoginToggle">
                <div className="LoginToggleBtn"></div>
              </div>
            </div>
            <div className="SocialLogin">
              <img src={GoogleLogo} alt="google" />
            </div>
          </li>
          <li>
            <span>
              <Link to="/signup" className="textLink">
                회원가입
              </Link>
            </span>
            <span>아이디찾기</span>
            <span>비밀번호찾기</span>
          </li>
        </ul>
      </form>
      <div className="Filter"></div>
      <video className="BackGround" autoPlay muted loop>
        <source src={BackGroundVideo2} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default withRouter(SignIn);
