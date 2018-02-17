import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GFooter from 'grommet/components/Footer';
import GAnchor from 'grommet/components/Anchor';

import LandingPage from './components/LandingPage';
import IntroductionPage from './components/IntroductionPage';
import FindDifference from './FindDiffrence';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <GApp className="app" centered={false}>
        <GArticle className="article">
          <Router>
            <React.Fragment>
              <Route path="/:x" render={() => <Header />} />
              <Switch>
                <Route path="/wprowadzenie" component={IntroductionPage} />
                <Route
                  path="/znajdz-roznice"
                  component={() => <FindDifference visible={true} />}
                />
                <Route path="/" component={LandingPage} />
                {/* TODO handle no match */}
              </Switch>
            </React.Fragment>
          </Router>
          <GFooter className="footer" size="small">
            <GAnchor align="center">Żródła</GAnchor>
          </GFooter>
        </GArticle>
      </GApp>
    );
  }
}

export default App;
