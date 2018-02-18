import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import _ from 'lodash';
import GHeader from 'grommet/components/Header';
import GButton from 'grommet/components/Button';
import GImage from 'grommet/components/Image';

import sherlock from '../assets/sherlock.svg';

class Header extends Component {
  render() {
    return (
      <GHeader className="header">
        <Link to="/">
          <GImage src={sherlock} size="small" className="logo" />
        </Link>
        <Link to="/wprowadzenie">
          <GButton className="button" primary={true} onClick={_.noop}>
            Wprowadzenie
          </GButton>
        </Link>
        <Link to="/znajdz-roznice">
          <GButton className="button" primary={true} onClick={_.noop}>
            Znajdż różnicę
          </GButton>
        </Link>
        <Link to="/lampki/instrukcja">
          <GButton className="button" primary={true} onClick={_.noop}>
            Lampki
          </GButton>
        </Link>
      </GHeader>
    );
  }
}

export default Header;
