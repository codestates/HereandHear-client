import axios from 'axios';
import React, { useState, useEffect } from 'react';

function SignUp() {
  const [id, setId] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [checked, setChecked] = useState(true);
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    if (id !== '' && id.length <= 1) {
      setErrMessage('사용하실 이메일을 넣어주세요');
    } else if (id.length >= 2 && !isEmail(id)) {
      setErrMessage('이메일 형식에 맞게 작성해주세요');
    } else {
      setErrMessage('');
    }
  }, [id]);

  useEffect(() => {
    if (nickName !== '' && nickName.length <= 1) {
      setErrMessage('사용하실 닉네임을 넣어주세요');
    } else if (nickName.length >= 2 && !isNickName(nickName)) {
      setErrMessage('닉네임은 4~8자 영문, 숫자만 가능합니다.');
    } else {
      setErrMessage('');
    }
  }, [nickName]);

  useEffect(() => {
    if (password.length >= 1 && !isPassword(password)) {
      setErrMessage('패스워드는 8 ~ 15자 영문, 숫자 조합입니다.');
    } else {
      setErrMessage('');
    }
  }, [password]);

  useEffect(() => {
    if (!checked) {
      setErrMessage('이용약관에 동의해주세요');
    } else {
      setErrMessage('');
    }
  }, [checked]);

  const isEmail = (email) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
  };

  const isPassword = (password) => {
    const PasswordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
    return PasswordRegex.test(password);
  };

  const isNickName = (nickName) => {
    const nickNameRegex = /^[a-zA-Z0-9]{4,8}$/;
    return nickNameRegex.test(nickName);
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleNickName = (e) => {
    setNickName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword2 = (e) => {
    setPassword2(e.target.value);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const signUpBtn = async () => {
    if (!isEmail(id)) {
      // alert('이메일 형식에 맞게 작성해주세요');
      setErrMessage('사용하실 이메일을 넣어주세요');
    } else if (!isNickName(nickName)) {
      // alert('닉네임은 4~11자 영문, 숫자만 가능합니다.');
      setErrMessage('닉네임은 4~11자 영문, 숫자만 가능합니다.');
    } else if (!isPassword(password)) {
      // alert('패스워드는 8 ~ 10자 영문, 숫자 조합입니다.');
      setErrMessage('패스워드는 8 ~ 10자 영문, 숫자 조합입니다.');
    } else if (password !== password2) {
      setErrMessage('동일한 비밀번호를 입력하세요');
    } else if (!checked) {
      setErrMessage('이용약관에 동의해주세요');
    } else {
      await axios.post('https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/user/signup',{
        email:id,
        password:password,
        username:nickName,
      }).then((res) => {
        if(res.data){
          setId('')
          setNickName('')
          setPassword('')
          setPassword2('')
          alert('회원가입완료')
        }
      }).catch((err) => {
        alert('이미 존재하는 회원입니다.')
      })
      ;
    }
  };

  // const handleKeybord = (key) => {
  //   console.log(key);
  // };

  return (
    <div className="SignUp">
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="SignUpUl">
          {errMessage === '' ? (
            <li>SIGN UP</li>
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
          {/* <li>Sign Up</li> */}
          <li>
            <div className="UserNameIcon"></div>
            <input
              value={id}
              onChange={handleId}
              placeholder="Email"
              required
              autoFocus
              autoComplete="off"
            ></input>
          </li>
          <li>
            <div className="NickNameIcon"></div>
            <input
              value={nickName}
              onChange={handleNickName}
              placeholder="NickName"
              required
              maxLength="8"
              autoComplete="off"
            ></input>
          </li>
          <li>
            <div className="PasswordIcon"></div>

            <input
              type="password"
              onChange={handlePassword}
              placeholder="Password"
              autoComplete="off"
              maxLength="15"
            ></input>
          </li>
          <li>
            <div className="PasswordIcon"></div>

            <input
              type="password"
              onChange={handlePassword2}
              placeholder="Password Confirm"
              autoComplete="off"
              maxLength="15"
            ></input>
          </li>
          <li>
            <div className="checkbox">
              <input
                id="checkbox"
                type="checkbox"
                // checked={checked}
                defaultChecked
                onChange={handleCheck}
              ></input>
              <label htmlFor="checkbox">
                이용약관과 개인정보방침에 동의합니다.
              </label>
            </div>
          </li>
          <li>
            <button onClick={signUpBtn} className="SignUpBtn">
              Sign Up
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SignUp;
