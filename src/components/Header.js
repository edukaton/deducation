import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import _ from 'lodash';
import GHeader from 'grommet/components/Header';
import GButton from 'grommet/components/Button';

import Logo from './Logo';

class Header extends Component {
  render() {
    return (
      <GHeader className="header">
        <Logo size="medium" />
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
