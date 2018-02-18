import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GImage from 'grommet/components/Image';
import GBox from 'grommet/components/Box';

import sherlock from '../assets/sherlock.svg';
import './LandingPage.css';

class LandingPage extends PureComponent {
  render() {
    return (
      <GSection className="landing-page-section">
        <GBox align="center">
          <GImage src={sherlock} size="small" />
          <GHeading align="center" strong={true}>
            Dedukacja
          </GHeading>
          <GParagraph className="paragraph" align="center" size="large">
            Część I: Sherlock i fatalne fake newsy
          </GParagraph>
        </GBox>
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
