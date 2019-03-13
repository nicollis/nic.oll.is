import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Redirect from './components/Redirect.js';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:key" component={Redirect} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
