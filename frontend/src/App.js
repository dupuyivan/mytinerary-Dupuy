import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import{ BrowserRouter, Switch , Route, Redirect  } from "react-router-dom"

import { Home } from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/SignIn"
import { ToastProvider } from 'react-toast-notifications';

import { connect } from "react-redux"
import authAction from"./redux/actions/authAction"

function App({ validToken, userLogued }) {

  if ( !userLogued && localStorage.getItem("token") ) { validToken() }

  return (
    <>
    <ToastProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cities" component={ Cities } />
          <Route path="/city/:id" component={ City } />
          { !userLogued && <>  
            <Route path="/signup" component={ SignUp } />
            <Route path="/login" component={ LogIn } /> 
            </> 
          }
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </ToastProvider>
    </>
  );
}   

const mapStateToProps = state =>{
  return{
    userLogued:state.authReducer.userLogued
  }
}

const mapDispatchToProps ={
  validToken:authAction.validarToken
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
