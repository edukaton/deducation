import React from 'react';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';

import NavButtons from '../NavButtons';

const FindDifferenceIntro = ({hideIntro}) => (
  <div className="content-wrapper">
    <GSection className="section" align="center">
      <GHeading margin="medium" align="center" strong={true}>
        Znajdź różnicę
      </GHeading>
      <GParagraph
        className="paragraph"
        margin="medium"
        size="large"
        justify="center">
        Jesteś co raz bliżej wytropienia Moriarty’ego. Szalony profesor czuje, że
        depczesz mu po piętach, ukrywa się więc używając pseudonimów innych
        autorów. <b>Oceń, który artykuł został napisany przez złoczyńcę</b>.
        Wskaż, który autor jest rzeczywiście winny i ocal Londyn.
      </GParagraph>
    </GSection>
    <NavButtons prev="/wprowadzenie" next="/znajdz-roznice/cwiczenie"/>
  </div>
);

export default FindDifferenceIntro;
