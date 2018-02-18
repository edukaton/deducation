import React, {PureComponent} from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';

import NavButtons from "../NavButtons";

class LightsInstructionPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <GSection className="section">
          <GHeading margin="medium" align="center" strong={true}>
            Lampki
          </GHeading>
          <GParagraph className="paragraph" align="center" size="large">
            Moriarty przekupił znajomych redaktorów i za ich pomocą rozsiewa wirus paniki w mieście. Nie dopuść
            do dezinformacji społeczeństwa i wybuchu rychłej katastrofy. Przerażony tłum brzytwy się chwyta, a cwany
            Moriarty zostanie golibrodą. Twoim zadaniem jest wychwycenie sformułowań mających na celu wytworzenie w
            czytelnikach fałszywego przekonania względem rzetelności informacji.
          </GParagraph>
        </GSection>
        <NavButtons prev="/lampki/teoria" next="/lampki/cwiczenie" />
      </div>
    );
  }
}

export default LightsInstructionPage;
