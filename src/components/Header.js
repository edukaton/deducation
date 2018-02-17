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
        <GImage src={sherlock} size="small" className="logo" />
        <Link to="/">
          <GButton className="button" primary={true} onClick={_.noop}>
            Dedukacja
          </GButton>
        </Link>
        <Link to="/znajdz-roznice">
          <GButton className="button" primary={true} onClick={_.noop}>
            Znajdż różnice
          </GButton>
        </Link>
      </GHeader>
    );
  }
}

export default Header;
