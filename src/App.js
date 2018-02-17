import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import _ from 'lodash';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GFooter from 'grommet/components/Footer';
import GAnchor from 'grommet/components/Anchor';
import GButton from 'grommet/components/Button';
import GHeader from 'grommet/components/Header';

import LandingPage from './components/LandingPage'
import IntroductionPage from './components/IntroductionPage'
import Logo from './components/Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <GApp className="app" centered={false}>
        <GArticle className="article">
          <Router>
            <div>
              <Route
                path="/:x"
                render={() => (
                  <GHeader className="header">
                    <Logo size="medium" />
                    <Link to="/">
                      <GButton className="button" primary={true} onClick={_.noop}>
                        Dedukacja
                      </GButton>
                    </Link>
                  </GHeader>
                )}
              />
              <Route exact path="/" component={LandingPage} />
              <Route path="/introduction" component={IntroductionPage} />
            </div>
          </Router>
          <GFooter className="footer" size="small">
            <GAnchor align="center">
              Żródła
            </GAnchor>
          </GFooter>
        </GArticle>
      </GApp>
    );
  }
}

export default App;
