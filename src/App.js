import React from 'react';
import ContactPage from './components/ContactPage';
import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Provider store = { store }>
        <div className = "container mt-5">
          <Switch>
            <Route exact path="/" component = { ContactPage }/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
