import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GButton from 'grommet/components/Button';
import GBox from 'grommet/components/Box';
import GImage from 'grommet/components/Image';

import bigBen from '../assets/big-ben.svg';

class LandingPage extends PureComponent {
  render() {
    return (
      <GSection className="section">
        <GBox align="center">
          <GHeading align="center" strong={true}>
            Wstęp
          </GHeading>
          <GParagraph
            className="paragraph"
            align="center"
            size="large"
            margin="small">
            Londyn, rok 2018. Krajobraz za oknem przeglądarki spowity jest gęstą
            mgłą, a bezdomne psy schroniły się w otwartych bramach przed
            nadchodzącą ulewą.
          </GParagraph>
          <GParagraph
            className="paragraph"
            align="center"
            size="large"
            margin="small">
            Mimo to, życie społecznościowe wydaje się tętnić. Facebookowe ulice
            pełne są dyliżansów pędzących na zbliżające się eventy, młodzi
            chłopcy z gazetami rozdają najnowsze podcasty.
          </GParagraph>
          <GParagraph
            className="paragraph"
            align="center"
            size="large"
            margin="small">
            Sieciową sielankę przerywa jednak niepokojąca informacja o
            najnowszym dokonaniu profesora Moriarty’ego – z jego laboratorium
            wyciekły, toksyczne{' '}
            <span className="marked">fatalne fake newsy</span>.
          </GParagraph>
          <GParagraph
            className="paragraph"
            align="center"
            size="large"
            margin="small">
            Pomóż Sherlockowi rozwiązać zagadkę niepewnych źródeł i ocal świat
            przed zalewem niesprawdzonych danych. Twoja przygoda zaczyna się
            teraz!
          </GParagraph>
          <Link to="/znajdz-roznice">
            <GButton className="button" primary={true} onClick={_.noop}>
              Dalej
            </GButton>
          </Link>
        </GBox>
        <GImage src={bigBen} size="small" className="image" />
      </GSection>
    );
  }
}

export default LandingPage;
