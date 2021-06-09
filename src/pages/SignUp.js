import React, { useState } from 'react';

function SignUp() {
  const [id, setId] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

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

  const signUpBtn = () => {
    if (id === '' || password === '' || password2 === '') {
      alert('아이디나 패스워드를 입력해주세요');
      // return;
    } else if (password !== password2) {
      alert('동일한 비밀번호를 입력해주세요');
      // return;
    } else {
      alert('회원가입이 되셨습니다!');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul>
          <li>signUp</li>
          <li>
            <input
              value={id}
              onChange={handleId}
              placeholder="Id를 입력해주세요"
              required
              autoFocus
            ></input>
          </li>
          <li>
            <input
              value={nickName}
              onChange={handleNickName}
              placeholder="닉네임을 입력해주세요"
              required
            ></input>
          </li>
          <li>
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="비밀번호를 입력해주세요"
            ></input>
          </li>
          <li>
            <input
              type="password"
              value={password2}
              onChange={handlePassword2}
              placeholder="동일한 비밀번호를 입력해주세요"
            ></input>
          </li>
          <li>이용약관 동의합니다</li>
          <li>
            <button onClick={signUpBtn}>signUp</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default SignUp;
