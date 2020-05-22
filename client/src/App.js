import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProtectedRoute from './utils/PrivateRoute';
import BubblePage from './components/BubblePage';

import Login from './components/Login';
import './styles.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 

        */}
        <ProtectedRoute path="/BubblePage">
          <BubblePage />
        </ProtectedRoute>
      </div>
    </Router>
  );
}

export default App;
