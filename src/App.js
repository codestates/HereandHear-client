import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FavoriteContents from './pages/FavoriteContents';
import Home from './pages/Home';
import Mypage from './pages/Mypage';
import Play from './pages/Play';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Google from './components/Google';
import './App.css';

function App() {
  const [isLogin, setLogin] = useState(false);
  const [isPlay, setPlay] = useState(false);

  const handleResponseSuccess = function () {
    setLogin(!isLogin);
  };

  const handleLogout = function () {
    setLogin(!isLogin);
  };

  const handlePlay = function () {
    setPlay(!isPlay);
  }

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} handleLogout={handleLogout}></Nav>
      <Switch>
        <Route path="/category" render={() => <Category />} />
        <Route
          path="/mypage"
          render={() => {
            if (!isLogin) {
              return <Redirect to="/signin" />;
            }
            return <Mypage />
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
        <Route path="/play" 
          render={() => {
            if(!isLogin) {
              return <Redirect to="/signin" />
            } else {
              return (
              <Play           
                isPlay={isPlay}
                handlePlay={handlePlay}
              />)
            }
          }} />
        <Route path="/favoritecontents" render={() => <FavoriteContents />} />
        <Route exact path="/" render={() => <Home isLogin={isLogin} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      {/* <Google isLogin={isLogin} handleResponseSuccess={handleResponseSuccess}/> */}
    </BrowserRouter>
  );
}

export default App;
