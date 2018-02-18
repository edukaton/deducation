import React, {PureComponent} from 'react';

import GImage from 'grommet/components/Image';

import NavButtons from './NavButtons';
import caseClosed from '../assets/case-closed.png';

class ExitPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <div className="columns">
          <GImage src={caseClosed} size="small" className="image" />
        </div>
        <NavButtons prev="/" next="/znajdz-roznice/teoria"/>
      </div>
    );
  }
}

export default ExitPage;
