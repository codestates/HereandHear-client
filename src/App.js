import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Play from './pages/Play';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import AudioBackGround from './components/AudioBackGround';
import axios from 'axios';

function App() {
  const [isLogin, setLogin] = useState(false); // 로그인관리
  const [isPlay, setPlay] = useState(false); // 플레이버튼
  const [isPlaying, setIsPlaying] = useState(false); // 재생관리
  // const [isAudioView, setAudioView] = useState(true); // 오디오 창 보이는 여부
  // 위 스테이트를 넣고 플레이 페이지가서 재싱시 오류 발생 이유를 모르겠음.
  // const [isUserInfo ,setUserInfo] =useState({
  //   id:'',
  //   nickname:''
  // })
  console.log(isPlay);

  useEffect(() => {
    if (sessionStorage.getItem('id') !== null) {
      setLogin(true);
    } else if (sessionStorage.getItem('accesstoken') !== null) {
      setLogin(true);
    }
  }, []);

  useEffect(() => {
    return setIsPlaying(false);
  }, []);

  //카카오 로그인
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      // authorization server로부터 클라이언트로 리디렉션된 경우, authorization code가 함께 전달됩니다.
      // ex) http://localhost:3000/?code=5e52fb85d6a1ed46a51f
      console.log(authorizationCode);

      axios
        .post(
          'https://ec2-18-117-241-8.us-east-2.compute.amazonaws.com:443/kakao/accessToken',
          {
            authorizationCode: authorizationCode,
          },
        )
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem('accesstoken', res.data.access_token);
          handleResponseSuccess();
        });
    }
  }, []);

  const handleResponseSuccess = function () {
    setLogin(!isLogin);
  };

  const handleResponsePlay = function (result) {
    setIsPlaying(result);
  };
  const handleLogout = function () {
    // console.log('로그앗버튼')
    setLogin(false);
    sessionStorage.clear();
  };

  const handlePlay = function (result) {
    setPlay(result);
  };

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} handleLogout={handleLogout}></Nav>
      <Switch>
        <Route
          path="/category"
          render={() => (
            <Category
              isPlay={isPlay}
              handlePlay={handlePlay}
              isLogin={isLogin}
            />
          )}
        />
        <Route
          path="/mypage"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/signin" />;
            }
            return <Mypage />;
          }}
          // component={Mypage}
        />
        <Route
          path="/signin"
          render={() => (
            <SignIn
              handleResponseSuccess={handleResponseSuccess}
              isLogin={isLogin}
            />
          )}
        />
        <Route path="/signup" render={() => <SignUp />} />
        <Route
          path="/play"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/signin" />;
            } else {
              return (
                <Play
                  isPlay={isPlay}
                  handlePlay={handlePlay}
                  isPlaying={isPlaying}
                  handleResponsePlay={handleResponsePlay}
                />
              );
            }
          }}
        />
        <Route
          path="/favorite"
          render={() => <Favorite handlePlay={handlePlay} isLogin={isLogin} />}
        />
        <Route
          exact
          path="/"
          render={() => (
            <Home
              isLogin={isLogin}
              handleResponseSuccess={handleResponseSuccess}
              handlePlay={handlePlay}
            />
          )}
        />
        <Route component={NotFound} />
      </Switch>
      <AudioBackGround
        isLogin={isLogin}
        isPlaying={isPlaying}
        handleResponsePlay={handleResponsePlay}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
