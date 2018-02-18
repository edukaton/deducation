import React, {PureComponent} from 'react';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GImage from 'grommet/components/Image';

import NavButtons from './NavButtons';
import bigBen from '../assets/big-ben.svg';

class LandingPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <div className="columns">
          <GSection className="section post">
            <GHeading margin="medium" align="center" strong={true}>
              Wstęp
            </GHeading>
            <GParagraph className="paragraph" size="large" margin="small">
              Londyn, rok 2018. Krajobraz za oknem przeglądarki spowity jest gęstą
              mgłą, a bezdomne psy schroniły się w otwartych bramach przed
              nadchodzącą ulewą.
            </GParagraph>
            <GParagraph className="paragraph" size="large" margin="small">
              Mimo to życie społecznościowe wydaje się tętnić. Facebookowe ulice
              pełne są dyliżansów pędzących na zbliżające się eventy, młodzi
              chłopcy z gazetami rozdają najnowsze podcasty.
            </GParagraph>
            <GParagraph className="paragraph" size="large" margin="small">
              Sieciową sielankę przerywa jednak niepokojąca informacja o
              najnowszym dokonaniu profesora Moriarty’ego – z jego laboratorium
              wyciekły toksyczne,
              <span className="marked"> fatalne fake newsy</span>.
            </GParagraph>
            <GParagraph className="paragraph" size="large" margin="small">
              Pomóż Sherlockowi rozwiązać zagadkę niepewnych źródeł i ocal świat
              przed zalewem niesprawdzonych danych. Twoja przygoda zaczyna się
              teraz!
            </GParagraph>
          </GSection>
          <GImage src={bigBen} size="small" className="image" />
        </div>
        <NavButtons prev="/" next="/lampki/wstep"/>
      </div>
    );
  }
}

export default LandingPage;
