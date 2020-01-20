import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import {
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";
import { changeLoginStatus } from "./js/actions";

/** mapping state values to props */

const mapStateToProps = state => {
  return {
    credentials: state.loginReducer.credentials,
    login_status: state.loginReducer.login_status,
    users : state.userReducer.users
   };
};
/* Dispatching actions to props */
function mapDispatchToProps(dispatch) {
  return {
    changeLoginStatus: status => dispatch(changeLoginStatus(status))
  };
}

const App = ({credentials,login_status,changeLoginStatus,users}) => {
  
  return (
    <div className="App">
      
     <Switch>
     <Route path="/dashboard">
     <Dashboard users={users} login_status={login_status}/>
      </Route>
     <Route path="/">
          <Login credentails={credentials} changeLoginStatus={changeLoginStatus} />
      </Route>
    </Switch>   
    </div>
  );
}

const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App)
export default AppContainer;
