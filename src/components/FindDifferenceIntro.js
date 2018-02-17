import React from 'react';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';

const FindDifferenceIntro = ({hideIntro}) => (
  <GSection
    className="find-diffrence--intro"
    colorIndex="light-2"
    padding="medium"
    align="center">
    <GHeading margin="medium" align="center">
      Znajdź różnicę
    </GHeading>
    <GParagraph
      className="paragraph"
      margin="medium"
      size="large"
      justify="center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </GParagraph>
    <GButton onClick={hideIntro} primary={true} className="button">
      Zaczynamy
    </GButton>
  </GSection>
);

export default FindDifferenceIntro;
