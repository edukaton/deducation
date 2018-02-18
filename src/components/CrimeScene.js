import React, {Component} from 'react';

import GImage from 'grommet/components/Image';
import GNotification from 'grommet/components/Notification';
import murder from '../assets/murder.svg';

import './CrimeScene.css';

const evidence = [
  {
    text:
      'Przeanalizuj miejsce zbrodni – rozłóż stronę www na czynniki pierwsze, zbadaj założenia strony (być może ma ona charakter stricte satyryczny) oraz podane dane kontaktowe do jej twórców.',
  },
  {
    text:
      'Sprawdź autorów – poszukaj informacji o nich, ich wcześniejszych publikacjach, dorobku naukowym, posiadanym doświadczeniu zawodowym oraz wykształceniu. Sprawdź, czy są wiarygodni oraz autentyczni.',
  },
  {
    text:
      'Dostrzeż to, co ukryte między słowami – nagłówki mogą być przynętą mającą na celu przyciągnięcie Twojej uwagi. Zapoznaj się z całym tekstem.',
  },
  {
    text:
      'Dodatkowe źródła – sprawdź wszystkie podlinkowane strony. Określ, czy podane w nich informacje rzeczywiście wspierają przytoczone przez Ciebie dowody.',
  },
  {
    text:
      'Sprawdź datę share’wanej publikacji – udostępnianie dawnych badań nie oznacza, że są one aktualne także w dniu dzisiejszymSprawdź datę share’wanej publikacji – udostępnianie dawnych badań nie oznacza, że są one aktualne także w dniu dzisiejszym.',
  },
  {
    text:
      'Nie bądź stronniczy – zastanów się, czy Twoje prywatne opinie nie wpływają na odbiór informacji.',
  },
  {
    text: 'Zapytaj eksperta – to nie wstyd, że czegoś nie wiesz.',
  },
];

class CrimeScene extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <GNotification closer={true} className="notification">
          Dopasuj błędy poznawcze do wypowiedzi.
        </GNotification>
        <div className="crime-scene">
          <GImage src={murder} size="medium" className="crime-scene__image" />
          {evidence.map(({text}, i) => (
            <div
              className={`crime-scene__evidence crime-scene__evidence--${i +
                1}`}>
              {text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CrimeScene;
