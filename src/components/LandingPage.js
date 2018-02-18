import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GImage from 'grommet/components/Image';

import sherlock from '../assets/sherlock.svg';

class LandingPage extends PureComponent {
  render() {
    return (
      <GSection className="section landing">
        <GImage src={sherlock} size="small" />
        <GHeading align="center" strong={true}>
          Dedukacja
        </GHeading>
        <GParagraph className="paragraph" align="center" size="large">
          Część I: Sherlock i fatalne fake newsy
        </GParagraph>
        <Link to="/wprowadzenie">
          <GButton className="button" primary={true} onClick={_.noop}>
            Rozpocznij
          </GButton>
        </Link>
      </GSection>
    );
  }
}

export default LandingPage;