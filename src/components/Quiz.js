import React, {Component} from 'react';

import GNotification from 'grommet/components/Notification';

import NavButtons from './NavButtons';

import './Quiz.css';

const questions = [
  {
    text:
      'W 2016 roku Monika Dargis i Michael Koenigs sprawdzali, czy obserwowanie przemocy domowej w młodym wieku może prowadzić do rozwinięcia cech psychopatycznych i na które z tych cech przemoc domowa miała największy wpływ.',
    description:
      'Poprawne. Nagłówek ten mówi o przeprowadzonych działaniach a nie o wnioskach z nich płynących.',
    legit: true,
  },
  {
    text:
      'Leczenie nowotworów metodami medycyny akademickiej to po prostu rzeźnia, nie ma to niczego wspólnego z prawidłowym leczeniem choroby nowotworowej.',
    description: 'Brak powołania się na badania, opiniotwórcze.',
    legit: false,
  },
  {
    text:
      'Kobieta bez dziecka to bezduszna egoistka, zapatrzona tylko w swoje potrzeby.',
    description: 'Opinia mocno nacechowana emocjami.',
    legit: false,
  },
  {
    text:
      'Ludzie wykorzystują tylko 10% swojego mózgu. My znaleźliśmy na to remedium!',
    description:
      'Nagłówek narzucający nam twierdzenie. Teoretycznie możemy zakończyć na pierwszym zdaniu. Jednakże, gdy wczytamy się w artykuł dowiemy się, że dane twierdzenie to bardzo powszechny mit. ',
    legit: false,
  },
  {
    text:
      'Monotlenek diwodoru może zmienić strukturę heksagonalną twojego organizmu',
    description:
      'Czy wiesz, że Monotlenek diwodoru to po prostu woda (H20)? A tak poza tym to sami nie wiemy co tu napisaliśmy, ale brzmi mądrze. Zanim rozpowszechnisz informację sprawdź o czym mowa.',
    legit: false,
  },
  {
    text:
      'Próba empirycznego zweryfikowania hipotezy stylów uczenia się zakończyła się niekorzystnie dla rzekomych stylów. Naukowcy wymieniają szereg problemów z tą koncepcją. (Coeffield i in., 2004).',
    description:
      'Poprawne. Tytuł nie rozpowszechnia błędnych przekonań. Aby cokolwiek wnioskować należy przeczytać artykuł.',
    legit: true,
  },
  {
    text:
      'Układ współczulny (łac. systema sympatyka) – część automatycznego układu nerwowego, odpowiadająca za przygotowanie organizmu do okazania współczucia, bądź litości innemu organizmowi, doświadczającemu cierpienia.',
    description:
      'Definicja układu współczulnego pochodzi ze strony satyrycznej. Bądźmy czujni! Nie opierajmy się na pierwszym znalezionym źródle. Zweryfikujmy je!',
    legit: false,
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionIndex: 0,
      answered: false,
      correct: false,
    };
  }

  answer = wasLegit => () => {
    const {questionIndex} = this.state;
    this.setState({
      answered: true,
      correct: wasLegit === questions[questionIndex].legit,
    });
  };

  next = () => {
    const {questionIndex} = this.state;
    if (questionIndex === questions.length - 1) {
      return;
    }

    this.setState({
      questionIndex: questionIndex + 1,
      answered: false,
      correct: false,
    });
  };

  render() {
    const {answered, questionIndex, correct} = this.state;
    const {text, description} = questions[questionIndex];

    return (
      <div className="content-wrapper">
        <GNotification
          closer={true}
          className="notification"
          status={answered ? (correct ? 'ok' : 'critical') : undefined}>
          {answered
            ? correct ? 'Dobra odpowiedź' : 'Zła odpowiedź'
            : 'Po dotarciu do biura dowody pomieszały nam się z nagłówkami mającymi przyciągnąć Twoją uwagę. Watsonie potrzebujemy Twojej pomocy. Bądź czujny! Na pewno przyda Ci się nowo nabyta wiedza.'}
        </GNotification>
        <div className="quiz">
          <div className="quiz__question">
            <div
              class="quiz__answer quiz__answer--legit"
              onClick={this.answer(true)}>
              Rzetelny
            </div>
            <div class="quiz__content">{text}</div>
            <div
              class="quiz__answer quiz__answer--clickbait"
              onClick={this.answer(false)}>
              Nierzetelny
            </div>
          </div>
          {answered && <div className="quiz__description">{description}</div>}
          {answered &&
            questionIndex < questions.length - 1 && (
              <div className="quiz__next" onClick={this.next}>
                Dalej
              </div>
            )}
        </div>
        <NavButtons
          prev="/znajdz-roznice/wstep"
          next="/znajdz-roznice/instrukcja"
        />
      </div>
    );
  }
}

export default Quiz;
