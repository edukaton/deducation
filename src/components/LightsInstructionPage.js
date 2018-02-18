import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GSection from 'grommet/components/Section';
import GButton from 'grommet/components/Button';
import GParagraph from 'grommet/components/Paragraph';

import './LightsExercisePage.css';

class LightsInstructionPage extends PureComponent {
  render() {
    return (
      <div className="lights-exercise">
        <GSection className="section">
          <GParagraph className="paragraph" align="center" size="large">
            Zadanie: Moriarty przekupił znajomych redaktorów i za ich pomocą rozsiewa wirus paniki w mieście. Nie dopuść
            do dezinformacji społeczeństwa i wybuchu rychłej katastrofy. Przerażony tłum brzytwy się chwyta, a cwany
            Moriarty zostanie golibrodą. Twoim zadaniem jest wychwycenie sformułowań mających na celu wytworzenie w
            czytelnikach fałszywego przekonania względem rzetelności informacji.
          </GParagraph>
        </GSection>
        <Link to="/lampki-cwiczenie">
          <GButton className="button" primary={true} onClick={_.noop}>
            Dalej
          </GButton>
        </Link>
      </div>
    );
  }
}

export default LightsInstructionPage;
