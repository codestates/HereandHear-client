import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FavoriteContents from './pages/FavoriteContents';
import Home from './pages/Home'
import Mypage from './pages/Mypage';
import Play from './pages/Play';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Nav from './components/Nav'

function App() {
  const isLogin = false;

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Switch>
        <Route path="/category" render={() => <Category />} />
        <Route path="/mypage" render={() => {
          if(!isLogin) {
            return <Redirect to='/signin' />
          }
        }} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/play" render={() => <Play />} />
        <Route path="/favoritecontents" render={() => <FavoriteContents />} />
        <Route exact path="/" render={() => <Home />} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
