import React, {Component} from 'react';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GImage from 'grommet/components/Image';

import Highlight from '../Highlight';
import NavButtons from '../NavButtons';
import virus from '../../assets/virus.svg';

class LightsExercisePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discovered: {},
    };
  }

  discover = e => {
    const solution = [
      {
        text: 'tysiące ofiar.',
        error:
          'Autor nie podał dokładnych statystyk oraz ich źródła. Użył uogólnienia.',
      },
      {
        text: 'Starsi mieszkańcy',
        error:
          'Autor oparł się na tak zwanej mądrości ludowej, zdrowo rozsądkowej bazującej na zgromadzeniu prawdziwych informacji vs przesądami.',
      },
      {
        text: 'Od dawna wiadomo, że',
        error: 'Autor nie odwołuje się do żadnego konkretnego źródła.',
      },
      {
        text: 'sam się uleczy i przywróci naturalną równowagę.',
        error:
          'Popularne zwroty charakterystyczne dla nauki nie popartej badaniami. Argument oparty na wątpliwym założeniu, że to co naturalne jest lepsze od tego co nienaturalne… Arszenik też jest naturalny.',
      },
      {
        text: 'wyraźną tendencję',
        error: 'Autor nie odwołuje się do żadnego konkretnego źródła.',
      },
      {
        text: 'Emma - jedna z mieszkanek dzielnicy',
        error:
          'Autor oparł się odwołał się do dowodu anegdotycznego – wnioskowanie w oparciu o doświadczenie pojedynczej osoby.',
      },
      {
        text: 'burmistrz Grzesiak',
        error:
          'Autor oparł się na regule autorytetu, zgodnie z którą chętniej wierzymy osobom sprawującym wysokie funkcje administracyjne.',
      },
      {
        text: 'lekarza znanego',
        error:
          'Autor oparł się na regule autorytetu, zgodnie z którą chętniej wierzymy osobom sprawującym wysokie funkcje administracyjne.',
      },
      {
        text: 'w specjalnie opracowanym raporcie,',
        error: 'Autor nie odwołuje się do żadnego konkretnego źródła.',
      },
      {
        text:
          'Są to najnowsze informacje, które zdobyliśmy specjalnie dla naszych czytelników',
        error:
          'Autor wykorzystuje regułę niedostępności zgodnie z którą wzrasta nasze pozytywne nastawienie do tematów, o których mowa w tekście, oraz silna chęć zapoznania się z nim z uwagi na ograniczoną dostępność.',
      },
      {
        text:
          'raport bowiem wciąż jest tajny, a pełne grono pracujących nad nim ekspertów wciąż pozostaje w ścisłej tajemnicy.',
        error:
          'Autor odwołuje się do percepcji osób nastawionych na ciągłe poszukiwanie zjawisk potwierdzających ich sposób postrzegania świata (bez odwoływania się do sprawdzonych, naukowych źródeł).',
      },
      {
        text: 'dodatku stworzonego przez naszych redaktorów',
        error:
          'Autor powołuje się na nienaukowe źródło informacji publikujące materiały niepoddane wcześniej tzw. podwójnej ślepej recenzji (autor nie zna tożsamości recenzentów; recenzent nie zna tożsamości autora) przez grono eksperckie.',
      },
    ];

    const text = e.currentTarget.innerText.trim();
    const result = solution.find(
      elem => elem.text.replace(/\s+/g, ' ') === text.replace(/\s+/g, ' '),
    );

    if (!result) {
      return;
    }

    this.setState({
      discovered: {...this.state.discovered, [result.text]: result.error},
    });
  };

  collapse = text => {
    const textTable = text.split(' ');
    return textTable.map((elem, i) => {
      return (
        <span className="word" key={i}>
          {' ' + elem + ' '}
        </span>
      );
    });
  };

  error = text => {
    const error = this.state.discovered[text];

    return (
      <Highlight
        visible={error}
        onClick={e => this.discover(e)}
        hint={error}
        type="critical">
        {error ? text : this.collapse(text)}
      </Highlight>
    );
  };

  render() {
    return (
      <div className="content-wrapper">
        <GSection className="section post">
          <GHeading margin="medium" align="center" strong={true} className="heading">
            Przyczłapnik bulwulatora zaatakował Londyn!
            <GImage src={virus} size="small" />
          </GHeading>
          <GParagraph className="paragraph" align="center" size="medium">
            {this.collapse(
              'Od tygodnia po Londynie szaleje zaraza Przyczłapnik Bulwulatora zbierając swoje ' +
              'śmiertelne żniwa. Pochłonęła już',
            )}
            {this.error('tysiące ofiar.')}
            {this.error('Starsi mieszkańcy')}
            {this.collapse(
              'pamiętają czasy, w których podobna choroba zabiła ich bliskich. Na szczęście dzielą ' +
              'się wiedzą jak sobie z nią poradzić! Większość z nich zaleca picie ciepłego mleka rozcieńczonego ' +
              'wodą oraz dodatkiem cytryny bogatej w dużą ilość lewoskrętnej witaminy C.',
            )}
            {this.error('Od dawna wiadomo, że')}
            {this.collapse('dzięki temu Wasz organizm')}
            {this.error('sam się uleczy i przywróci naturalną równowagę.')}
            {this.collapse(
              'Mieszkańcy Piccadilly Circus już przetestowali tę metodę. Dostrzegli',
            )}
            {this.error('wyraźną tendencję')}
            {this.collapse(
              'wskazującą na skuteczność tego rodzaju działań. Jak mówi',
            )}
            {this.error('Emma - jedna z mieszkanek dzielnicy')}
            {this.collapse(
              '- po wypiciu tak przygotowanego naparu poczuła się od razu lepiej.',
            )}
          </GParagraph>
          <GParagraph className="paragraph" align="center" size="medium">
            {this.collapse('Natomiast')}
            {this.error('burmistrz Grzesiak')}
            {this.collapse('zaprosił')}
            {this.error('lekarza znanego')}
            {this.collapse(
              'z telewizji śniadaniowej, specjalizującego się w alternatywnych sposobach leczenia. ' +
              'Sugeruje on',
            )}
            {this.error('w specjalnie opracowanym raporcie,')}
            {this.collapse(
              'aby każdego wieczora nacierać stopy masłem z czosnkiem.',
            )}
            {this.error(
              'Są to najnowsze informacje, które zdobyliśmy specjalnie dla naszych czytelników',
            )}
            {this.collapse('-')}
            {this.error(
              'raport bowiem wciąż jest tajny, a pełne grono pracujących nad nim ekspertów wciąż pozostaje ' +
              'w ścisłej tajemnicy.',
            )}
          </GParagraph>
          <GParagraph className="paragraph" align="center" size="medium">
            {this.collapse(
              'Z kolejnym wydaniem „Fake Time” będziecie mieli możliwość nabycia specjalnego',
            )}
            {this.error('dodatku stworzonego przez naszych redaktorów')}
            {this.collapse(
              '– kompendium radzenia sobie z chorobą, za jedyne 9,99£.',
            )}
          </GParagraph>
        </GSection>
        <NavButtons prev="/lampki/instrukcja" next="/quiz/teoria" />
      </div>
    );
  }
}

export default LightsExercisePage;
