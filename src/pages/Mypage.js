import React, { useState} from 'react';

function Mypage(props) {
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, SetErrMessage] = useState('');

  const handelMypage = () => {
    if (nickName === '') {
      SetErrMessage('변경하실 닉네임을 입력하세요');
    } else if (password === '') {
      SetErrMessage('비밀번호를 입력흐세요');
    } else {
      SetErrMessage('');
      props.history.push('/');
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
            <input value={'ID : smart555'} readOnly></input>
          </li>
          <li>
            <div className="NickNameIcon"></div>
            <input
              placeholder="변경하실 NickName을 입력하세요"
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

export default Mypage;
