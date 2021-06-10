import React from 'react';
import PlayContents from '../components/PlayContents';

function Play(props) {
  console.log(props.isLogin)
  // 추후 비로그인자일 시 리다이렉트로 로그인 페이지로 보낼 것
  return (
  <>
    <PlayContents />
  </>
  );
}

export default Play;
