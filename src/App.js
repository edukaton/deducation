import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GFooter from 'grommet/components/Footer';
import GAnchor from 'grommet/components/Anchor';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import IntroductionPage from './components/IntroductionPage';
import FindDifference from './components/FindDifference';
import LightsExercisePage from './components/LightsExercisePage';
import LightsInstructionPage from './components/LightsInstructionPage';

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
                <Route exact path="/" component={LandingPage} />
                <Route path="/wprowadzenie" component={IntroductionPage} />
                <Route
                  path="/znajdz-roznice"
                  component={() => <FindDifference />}
                />
                <Route path="/lampki-instrukcja" component={LightsInstructionPage} />
                <Route path="/lampki-cwiczenie" component={LightsExercisePage} />
                <Redirect to="/" />
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
