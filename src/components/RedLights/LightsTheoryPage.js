import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import GSection from 'grommet/components/Section';
import GButton from 'grommet/components/Button';
import GParagraph from 'grommet/components/Paragraph';
import GColumns from 'grommet/components/Columns';
import GAnimate from 'grommet/components/Animate';
import GHeading from 'grommet/components/Heading';
import GNotification from 'grommet/components/Notification';
import NavButtons from "../NavButtons";

class LightsTheoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  reveal = (correct) => {
    this.setState({visible: true, correct: correct});
  }

  render() {
    return (
      <div className="content-wrapper">
        {
          this.state.visible &&
          <GNotification closer={true} status={this.state.correct ? 'ok' : 'critical'} className="notification">
            {this.state.correct ? 'Dobra robota. ' : 'Błędny wybór. '}
          </GNotification>
        }
        <GSection margin="small" pad="small" className="section">
          <GParagraph className="paragraph" align="center" size="large">
            Moriarty zaczął działać w ukryciu i mieszać fakty z informacjami wątpliwej jakości. Pomóż poczciwemu
            Gladstone’owi wytropić wiedzę naukową – wskaż właściwą kolumnę tabeli.
          </GParagraph>
        </GSection>
        <GSection margin="small" pad="small" className="section">
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <div className="columns">
              <GSection margin="small" pad="small" className="section" onClick={() => this.reveal(true)}>
                {this.state.visible && <GHeading tag="h3">Wiedza naukowa</GHeading>}
                <GParagraph margin="small">
                  Uporządkowana, opierająca się na relacji przyczyna – skutek, bazująca na systemach dedukcyjnych.
                </GParagraph>
                <GParagraph margin="small">
                  Bazująca na twierdzeniach naukowych dostarczających wiedzę empiryczną i logiczną.
                </GParagraph>
                <GParagraph margin="small">
                  Sprawdzalna za pomocą badań prowadzonych w oparciu o metody naukowe; możliwa do weryfikacji.
                </GParagraph>
                <GParagraph margin="small">
                  Poziom przekonania na temat danej teorii jest równy poziomowi jego uzasadnienia.
                </GParagraph>
                <GParagraph margin="small">
                  Weryfikuje zależności pomiędzy zjawiskami czy też mechanizmami.
                </GParagraph>
                <GParagraph margin="small">
                  Wyspecjalizowana. Nie podlega ocenie.
                </GParagraph>
              </GSection>
              <GSection margin="small" pad="small" className="section" onClick={() => this.reveal(false)}>
                {this.state.visible && <GHeading tag="h3">Wiedza nienaukowa</GHeading>}
                <GParagraph margin="small">
                  Opiera się na podejściu zdroworozsądkowym, życiu codziennym; jest rozległa i zróżnicowana.
                </GParagraph>
                <GParagraph margin="small">
                  Dotyka ona bezpośrednio samych zjawisk, a nie ich modeli.
                </GParagraph>
                <GParagraph margin="small">
                  Jej twierdzenia odnoszą się do pojedynczych przypadków lub ich niewielkich zbiorów.
                </GParagraph>
                <GParagraph margin="small">
                  Nie odnoszą się do statystyk, jej twierdzenia są formułowane za pomocą opisów;
                </GParagraph>
                <GParagraph margin="small">
                  Posiada komponenty emocjonalne.
                </GParagraph>
                <GParagraph margin="small">
                  Mało precyzyjna i ogólnikowa. Nie przewiduje zjawisk.
                </GParagraph>
              </GSection>
            </div>
          </GAnimate>
        </GSection>
        <NavButtons prev="/znajdz-roznice/cwiczenie" next="/lampki/instrukcja" />
      </div>
    );
  }
}

export default LightsTheoryPage;
