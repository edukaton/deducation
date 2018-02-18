import React, {Component} from 'react';

import {shuffle} from 'lodash';

import MemoCard from './MemoCard';
import GNotification from 'grommet/components/Notification';

import './MemoCards.css';
import NavButtons from './NavButtons';

const cards = shuffle([
  {
    text:
      <span><span className="marked">Efekt potwierdzenia</span> - tendencja do poszukiwania wyłącznie faktów aprobujących posiadaną opinię, a nie weryfikujących ją.</span>,
    answerNumber: 1,
  },
  {
    text: '„Mówiłem, że palenie jest ok! To badanie właśnie to potwierdza!”',
    quote: true,
    answerNumber: 1,
  },
  {
    text:
      <span><span className="marked">Efekt zaprzeczania</span> – krytyczne  weryfikowanie informacji, które zaprzeczają dotychczasowym opiniom, przy bezkrytycznym akceptowaniu tych, które je potwierdzają.</span>,
    answerNumber: 2,
  },
  {
    text:
      '„Te nowe badania są na pewno źle przeprowadzone, przecież 40 lat temu już udowodnili, że tak nie jest!”',
    quote: true,
    answerNumber: 2,
  },
  {
    text:
      <span><span className="marked">Zaniedbywanie miarodajności</span> - dokonywanie oceny na podstawie danych, o których wiadomo, że nie mają znaczenia statystycznego.</span>,
    answerNumber: 3,
  },
  {
    text:
      '„No przecież te badania przeprowadzone na dwóch osobach pokazują, że tak jest.”',
    quote: true,
    answerNumber: 3,
  },
  {
    text:
      <span><span className="marked">Reguła autorytetu</span> - jesteśmy bardziej skłonni słuchać wskazań i zaleceń osób, które postrzegamy jako autorytety.</span>,
    answerNumber: 4,
  },
  {
    text: '„No przecież ta Pani lekarz w reklamie mówiła, że to działa.”',
    quote: true,
    answerNumber: 4,
  },
  {
    text:
      <span><span className="marked">Efekt przywiązania</span> – korzystanie ze zbyt mało różnorodnych źródeł informacji.</span>,
    answerNumber: 5,
  },
  {
    text: '„Pisał o tym Kowalski, to wystarczy do zweryfikowania hipotezy.”',
    quote: true,
    answerNumber: 5,
  },
  {
    text:
      <span><span className="marked">Efekt skupienia</span> - przywiązywanie zbyt dużej wagi do jednego szczegółu, co zaburza racjonalną ocenę użyteczności innego.</span>,
    answerNumber: 6,
  },
  {
    text:
      '„No nie powiesz mi, że on to ma poprzez ciężką pracę, ja widzę ile ma w życiu szczęścia!”',
    quote: true,
    answerNumber: 6,
  },
]);

class MemoCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      revealed: {},
    };
  }

  isFinished = () => {
    return Object.values(this.state.revealed).length === 6;
  };

  handleSelect = (text, answerNumber) => () => {
    const {selected, revealed} = this.state;
    const [selectedNumber = -1] = Object.values(selected);

    if (answerNumber === selectedNumber) {
      revealed[answerNumber] = true;
    }

    let newSelected = {};
    if (selectedNumber === -1) {
      newSelected = {[text]: answerNumber};
    }
    this.setState({selected: newSelected, revealed});
  };

  render() {
    const {selected, revealed} = this.state;
    return (
      <div className="content-wrapper">
        <GNotification closer={true} className="notification">
          Zbadaj miejsce zbrodni. Podglądaj dowody oznaczone cyframi.
        </GNotification>
        <div className="memo-grid">
          {cards.map(({text, answerNumber, quote}) => (
            <MemoCard
              className={`memo-grid__item memo-grid__item--${answerNumber}`}
              selected={selected[text]}
              text={text}
              quote={quote}
              reveal={revealed[answerNumber]}
              onClick={this.handleSelect(text, answerNumber)}
            />
          ))}
        </div>
        <NavButtons
          prev="/znajdz-roznice/wstep"
          next="/znajdz-roznice/instrukcja"
        />
      </div>
    );
  }
}

export default MemoCards;
