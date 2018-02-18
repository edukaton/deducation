import React, {Component} from 'react';
import { withRouter } from 'react-router';

import {Link} from 'react-router-dom';
import _ from 'lodash';
import GHeader from 'grommet/components/Header';
import GButton from 'grommet/components/Button';
import GImage from 'grommet/components/Image';

import sherlock from '../assets/sherlock.svg';

class Header extends Component {
  constructor(props)  {
    super(props);
    this.state = {wprowadzenie: true, lampki: true, quiz: true, roznice: true};
  }

  render() {
    return (
      <GHeader className="header">
        <Link to="/">
          <GImage src={sherlock} size="small" className="logo" />
        </Link>
        <Link to="/wprowadzenie">
          <GButton className="button" primary={true} onClick={this.state.wprowadzenie ? _.noop : null}>
            Wprowadzenie
          </GButton>
        </Link>
        <Link to="/lampki/wstep">
          <GButton className="button" primary={true} onClick={this.state.lampki ? _.noop : null}>
            Lampki
          </GButton>
        </Link>
        <Link to="/quiz/teoria">
          <GButton className="button" primary={true} onClick={this.state.quiz ? _.noop : null}>
            Quiz
          </GButton>
        </Link>
        <Link to="/znajdz-roznice/wstep">
          <GButton className="button" primary={true} onClick={this.state.roznice ? _.noop : null}>
            Znajdź różnice
          </GButton>
        </Link>
      </GHeader>
    );
  }
}

export default withRouter(Header);
