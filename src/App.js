import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GFooter from 'grommet/components/Footer';
import GAnchor from 'grommet/components/Anchor';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import IntroductionPage from './components/IntroductionPage';
import FindDifferenceIntro from './components/FindDifference/FindDifferenceIntro';
import FindDifferencePage from './components/FindDifference/FindDifferencePage';
import LightsExercisePage from './components/RedLights/LightsExercisePage';
import LightsInstructionPage from './components/RedLights/LightsInstructionPage';
import LightsTheoryPage from './components/RedLights/LightsTheoryPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <GApp className="app" centered={false}>
        <GArticle className="article">
          <Router>
            <React.Fragment>
              <Route path="/:x" component={Header} />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/wprowadzenie" component={IntroductionPage} />
                // TODO
                <Route path="/znajdz-roznice/teoria" component={FindDifferenceIntro}/>
                <Route path="/znajdz-roznice/instrukcja" component={FindDifferenceIntro}/>
                <Route path="/znajdz-roznice/cwiczenie" component={FindDifferencePage}/>
                <Route path="/lampki/teoria" component={LightsTheoryPage} />
                <Route path="/lampki/instrukcja" component={LightsInstructionPage} />
                <Route path="/lampki/cwiczenie" component={LightsExercisePage} />
                <Redirect to="/" />
              </Switch>
            </React.Fragment>
          </Router>
          <GFooter className="footer">
            <GAnchor align="center">Źródła</GAnchor>
          </GFooter>
        </GArticle>
      </GApp>
    );
  }
}

export default App;
