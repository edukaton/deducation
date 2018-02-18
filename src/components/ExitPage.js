import React, {PureComponent} from 'react';

import GImage from 'grommet/components/Image';

import caseClosed from '../assets/case-closed.png';

class ExitPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <div className="columns">
          <GImage src={caseClosed} size="small" className="image" />
        </div>

      </div>
    );
  }
}

export default ExitPage;
