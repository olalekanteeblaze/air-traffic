import React from 'react';
import './App.css';
import Login from './Login';
import { connect } from 'react-redux';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import  ProtectedRoute  from './ProtectedRoute'

function App(props) {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute  path="/dashboard" component={Dashboard} auth={props.auth}/>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}
function mapStateToProps(state){
  return {
    auth: state.login.auth
  }
}

export default connect(mapStateToProps, null)(App);
