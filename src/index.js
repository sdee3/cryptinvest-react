import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route /* ,
  Link,
  Switch,
  Redirect */,
} from 'react-router-dom';

import './index.css';

import { Navbar } from './components/Navbar/Navbar';
import Currencies from './components/Currencies/Currencies';
import registerServiceWorker from './registerServiceWorker';
import { BodyContent } from './components/Body/BodyContent';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <div className="container">
            <Route exact path="/" component={BodyContent} />
            <Route path="/dashboard" component={Currencies} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
