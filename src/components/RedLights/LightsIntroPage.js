import React, {PureComponent} from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';
import NavButtons from "../NavButtons";

class LightsIntroPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <GSection className="section post">
          <GHeading margin="medium" align="center" strong={true}>
            Lampki
          </GHeading>
          <GParagraph className="paragraph limited" align="center" size="large">
            Moriarty zaczął działać w ukryciu i mieszać fakty z informacjami
            wątpliwej jakości. Pomóż poczciwemu Gladstone’owi wytropić wiedzę
            naukową – wskaż właściwą kolumnę tabeli.
          </GParagraph>
        </GSection>
        <NavButtons prev="/wprowadzenie" next="/lampki/teoria" />
      </div>
    );
  }
}

export default LightsIntroPage;
