import React from 'react'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import ForgetPassword from './components/ForgetPassword'
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav />
          {/* <div className="w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}> */}
          {/* <div className="w-100" style={{ maxWidth: '400px' }}> */}
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signUp" component={SignUp} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
          </Switch>
          {/* </div> */}
          {/* </div > */}
        </AuthProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
