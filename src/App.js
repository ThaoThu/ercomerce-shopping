import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SigninAndSignUp from './pages/signin-and-signup/Signin';
import { auth } from './firebase/firebase.utils'
function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(() => {
    let unmountStateChange = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log("🚀 ~ file: App.js ~ line 14 ~ useEffect ~ user", user)
    })
    return () => unmountStateChange()

  }, [])


  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/sign-in' component={SigninAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
