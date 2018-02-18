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
      <div className="lights-exercise">
        {
          this.state.visible &&
          <GNotification closer={true} status={this.state.correct ? 'ok' : 'critical'}>
            {this.state.correct ? 'Dobra robota. ' : 'Błędny wybór. '}
          </GNotification>
        }
        <GSection className="section">
          <GParagraph className="paragraph" align="center" size="large">
            Moriarty zaczął działać w ukryciu i mieszać fakty z informacjami wątpliwej jakości. Pomóż poczciwemu
            Gladstone’owi wytropić wiedzę naukową – wskaż właściwą kolumnę tabeli.
          </GParagraph>
        </GSection>
        <GSection colorIndex="light-2">
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <GColumns masonry={true} justify="center" maxCount={2}>
              <GSection margin="medium" pad="medium" size={{ height: 'large', width: 'large' }} className="section" onClick={() => this.reveal(true)}>
                {this.state.visible && <GHeading tag="h3">Wiedza naukowa</GHeading>}
                <GParagraph>
                  Uporządkowana, opierająca się na relacji przyczyna – skutek, bazująca na systemach dedukcyjnych.
                </GParagraph>
                <GParagraph>
                  Bazująca na twierdzeniach naukowych dostarczających wiedzę empiryczną i logiczną.
                </GParagraph>
                <GParagraph>
                  Sprawdzalna za pomocą badań prowadzonych w oparciu o metody naukowe; możliwa do weryfikacji.
                </GParagraph>
                <GParagraph>
                  Poziom przekonania na temat danej teorii jest równy poziomowi jego uzasadnienia.
                </GParagraph>
                <GParagraph>
                  Weryfikuje zależności pomiędzy zjawiskami czy też mechanizmami.
                </GParagraph>
                <GParagraph>
                  Wyspecjalizowana. Nie podlega ocenie.
                </GParagraph>
              </GSection>
              <GSection margin="medium" pad="medium" size={{ height: 'large', width: 'large' }} className="section" onClick={() => this.reveal(false)}>
                {this.state.visible && <GHeading tag="h3">Wiedza nienaukowa</GHeading>}
                <GParagraph>
                  Opiera się na podejściu zdroworozsądkowym, życiu codziennym; jest rozległa i zróżnicowana.
                </GParagraph>
                <GParagraph>
                  Dotyka ona bezpośrednio samych zjawisk, a nie ich modeli.
                </GParagraph>
                <GParagraph>
                  Jej twierdzenia odnoszą się do pojedynczych przypadków lub ich niewielkich zbiorów.
                </GParagraph>
                <GParagraph>
                  Nie odnoszą się do statystyk, jej twierdzenia są formułowane za pomocą opisów;
                </GParagraph>
                <GParagraph>
                  Posiada komponenty emocjonalne.
                </GParagraph>
                <GParagraph>
                  Mało precyzyjna i ogólnikowa. Nie przewiduje zjawisk.
                </GParagraph>
              </GSection>
            </GColumns>
          </GAnimate>
        </GSection>
        <Link to="/lampki/instrukcja">
          <GButton className="button" primary={true} onClick={_.noop}>
            Dalej
          </GButton>
        </Link>
      </div>
    );
  }
}

export default LightsTheoryPage;
