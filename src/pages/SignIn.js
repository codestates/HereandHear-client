import React, { useState } from 'react';


function SignIn() {

  const [ id, setId ] = useState('');
  const [ password, setPassword] = useState('');

  const login = () => {
    if(id === '' || password === '') {
      alert('아이디나 패스워드를 입력해주세요')
      return;
    }
  }

  const handleId = (e) => {
    setId(e.target.value);
  }

  const handlePassword  = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} >
        <ul>
          <li>memberLogin</li>
          <li><input value={id} onChange={handleId}></input></li>
          <li>
            <input 
              type="password" 
              value={password} 
              onChange={handlePassword}>
            </input>
          </li>
          <li><button type="submit" onClick={login}>로그인</button></li>
          <li>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </li>
          <li>
            <span>회원가입</span>
            <span>비번찾기</span>
            <span>아이디찾기</span>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default SignIn;