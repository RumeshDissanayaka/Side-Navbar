import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import Charts from './pages/Chart';
import NavBar from './components/Navbar';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/charts" component={Charts} />
        </Switch>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
