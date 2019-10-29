import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import { ProtectedRoute } from './ProtectedRoute'

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute  path="/dashboard" component={Dashboard}  />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
