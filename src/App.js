import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Route path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
