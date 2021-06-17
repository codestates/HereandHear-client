import React, { useState, useEffect } from 'react';
import {withRouter} from'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function Mypage(props) {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errMessage, SetErrMessage] = useState('');

  // console.log(sessionStorage.getItem('id'));
  useEffect(() => {
    axios
      .get(
        process.env.REACT_APP_BASE_URL + '/user/' +
          sessionStorage.getItem('id'),
      )
      .then((res) => {
        setEmail(res.data.data.email);
        setNickName(res.data.data.nickname);
        // console.log(res.data);
      });
  }, []);

  const handelMypage = () => {
    if (nickName === '') {
      SetErrMessage('변경하실 닉네임을 입력하세요');
    } else if (password === '') {
      SetErrMessage('비밀번호를 입력하세요');
    } else {
      axios
        .post(
          process.env.REACT_APP_BASE_URL + '/user/update',
          {
            nickname: nickName,
            email: email,
            userId: sessionStorage.getItem('id'),
            password: password,
          },
        )
        .then((res) => {
          SetErrMessage('회원정보가 수정 되었습니다.');
          setTimeout(()=>{
            props.history.push('/');
          },2000)
        })
        .catch((err) => {
          if (err) {
            SetErrMessage('비밀번호를 확인해주세요');
          }
        });
    }
  };

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="MyPage">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="SignUpUl">
          {errMessage === '' ? (
            <li>MY PAGE</li>
          ) : (
            <li
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                zIndex: '15',
                alignItems: 'center',
                borderBottom: '4px solid #d21c38',
                fontSize: '1rem',
              }}
            >
              {errMessage}
            </li>
          )}

          <li>
            <div className="UserNameIcon"></div>
            <input
              readOnly
              value={email || ''}
              style={{
                color: '#fff',
              }}
            ></input>
          </li>
          <li>
            <div className="NickNameIcon"></div>
            <input
              value={nickName}
              onChange={handleNickName}
            ></input>
          </li>

          <li>
            <div className="PasswordIcon"></div>
            <input
              type="password"
              placeholder="변경을 원하시면 Password를 입력하세요"
              autoComplete="off"
              onChange={handlePassword}
            ></input>
          </li>

          <li>
            <button className="SignUpBtn" onClick={handelMypage}>
              회원정보 수정하기
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default withRouter(Mypage);
