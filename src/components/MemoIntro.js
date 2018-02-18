import React, {PureComponent} from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';
import NavButtons from "./NavButtons";

class MemoIntro extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <GSection className="section post">
          <GHeading margin="medium" align="center" strong={true}>
            Znajdź różnice
          </GHeading>
          <GParagraph className="paragraph" align="center" size="large">
            Watsonie, mam dla Ciebie kolejne wskazówki, które mogą pomóc w walce z Moriarty'm. Chciałbym zapoznać Cię z kilkoma błędami, które mogą mieć wpływ na Twoje postrzeganie informacji.
          </GParagraph>
          <GParagraph className="paragraph" align="center" size="large">
            Dobry detektyw powinien charakteryzować się znakomitą pamięcią. Szybko powinieneś przyswoić tę wiedzę. Twoim zadaniem jest dopasowanie definicji do przykładów poprzez odkrywanie kolejnych kafelków.
          </GParagraph>
        </GSection>
        <NavButtons prev="/wprowadzenie" next="/znajdz-roznice/teoria" />
      </div>
    );
  }
}

export default MemoIntro;
