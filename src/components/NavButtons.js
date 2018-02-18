import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GButton from 'grommet/components/Button';

class NavButtons extends PureComponent {
  render() {
    return (
      <div className="buttons-wrapper">
        <Link to={this.props.prev}>
          <GButton className="button" primary={true} onClick={_.noop}>
            Wstecz
          </GButton>
        </Link>
        <Link to={this.props.next}>
          <GButton className="button" primary={true} onClick={_.noop}>
            Dalej
          </GButton>
        </Link>
      </div>
    )
  }
}

export default NavButtons;
