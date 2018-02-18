import React, {Component} from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GImage from 'grommet/components/Image';
import GAnimate from 'grommet/components/Animate';
import GHeading from 'grommet/components/Heading';
import GNotification from 'grommet/components/Notification';
import NavButtons from '../NavButtons';

import dog from '../../assets/dog.svg';

class LightsTheoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }

  reveal = correct => {
    this.setState({visible: true, correct: correct});
  };

  render() {
    return (
      <div className="content-wrapper">
        {this.state.visible ? (
          <GNotification
            closer={true}
            status={this.state.correct ? 'ok' : 'critical'}
            className="notification">
            {this.state.correct ? 'Dobra robota. ' : 'Błędny wybór. '}
          </GNotification>
        ) : (
          <GNotification closer={true} className="notification">
            Wskaż, które z podpunktów opisują wiedzę naukową.
          </GNotification>
        )}
        <GSection margin="small" pad="small" className="section">
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <div className="columns">
              <GSection
                margin="small"
                pad="small"
                className="section post"
                onClick={() => this.reveal(true)}>
                {this.state.visible && (
                  <GHeading tag="h3" className="heading">
                    Wiedza naukowa
                  </GHeading>
                )}
                <GParagraph margin="small" className="paragraph">
                  Uporządkowana, opierająca się na relacji przyczyna – skutek,
                  bazująca na systemach dedukcyjnych.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Bazująca na twierdzeniach naukowych dostarczających wiedzę
                  empiryczną i logiczną.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Sprawdzalna za pomocą badań prowadzonych w oparciu o metody
                  naukowe; możliwa do weryfikacji.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Poziom przekonania na temat danej teorii jest równy poziomowi
                  jego uzasadnienia.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Weryfikuje zależności pomiędzy zjawiskami czy też
                  mechanizmami.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Wyspecjalizowana. Nie podlega ocenie.
                </GParagraph>
              </GSection>
              <GSection
                margin="small"
                pad="small"
                className="section post"
                onClick={() => this.reveal(false)}>
                {this.state.visible && (
                  <GHeading tag="h3" className="heading">
                    Wiedza nienaukowa
                  </GHeading>
                )}
                <GParagraph margin="small" className="paragraph">
                  Opiera się na podejściu zdroworozsądkowym, życiu codziennym;
                  jest rozległa i zróżnicowana.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Dotyka ona bezpośrednio samych zjawisk, a nie ich modeli.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Jej twierdzenia odnoszą się do pojedynczych przypadków lub ich
                  niewielkich zbiorów.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Nie odnoszą się do statystyk, jej twierdzenia są formułowane
                  za pomocą opisów;
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Posiada komponenty emocjonalne.
                </GParagraph>
                <GParagraph margin="small" className="paragraph">
                  Mało precyzyjna i ogólnikowa. Nie przewiduje zjawisk.
                </GParagraph>
              </GSection>
              <GImage src={dog} size="small" />
            </div>
          </GAnimate>
        </GSection>
        <NavButtons prev="/lampki/wstep" next="/lampki/instrukcja" />
      </div>
    );
  }
}

export default LightsTheoryPage;
