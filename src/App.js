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
import './App.css';
import Footer from './components/Footer';

function App() {
  const [isLogin, setLogin] = useState(false);

  const handleResponseSuccess = function () {
    setLogin(!isLogin);
  };

  const handleLogout = function () {
    setLogin(!isLogin);
  };

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
          }}
        />
        <Route
          path="/signin"
          render={() => (
            <SignIn handleResponseSuccess={handleResponseSuccess} />
          )}
        />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/play" render={() => <Play />} />
        <Route path="/favoritecontents" render={() => <FavoriteContents />} />
        <Route exact path="/" render={() => <Home />} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
