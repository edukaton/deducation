import React from 'react';

import Highlight from './Highlight';

export const postsByVisibility = visible => [
  {
    fake: {
      heading: <div>NIESAMOWITE ODKRYCIE BRYTYJSKICH NAUKOWCÓW!</div>,
      content: (
        <div>
          Jeden z{' '}
          <Highlight
            type="critical"
            hint="Tytuł przeczy treści artykułu."
            visible={visible}>
            mieszkańców
          </Highlight>{' '}
          Londynu przez ponad połowę swojego życia spożywał liście tytoniu.
          Dożył aż 103 lat. Możemy{' '}
          <Highlight
            type="critical"
            hint="Przedstawiona treść jest tak zwanym dowodem anegdotycznym –
          wnioskowaniem w oparciu o pojedynczy przypadek. Jedynie
          przeprowadzenie badań w sposób zgodny z obowiązującą metodą naukową
          może pozwolić nam na uogólnianie uzyskanych wyników na większe
          populację."
            visible={visible}>
            wnioskować
          </Highlight>, iż ich spożywanie jest w stanie znacznie przedłużyć
          średnią długość życia mieszkańców naszego miasta. Również nasz{' '}
          <Highlight
            type="critical"
            hint="Powołanie się na regułę autorytetu. Polega ona na większej
          skłonności do posłuszeństwa osobom, które uważa się za autorytety.
          Czasem jednak ulega się jedynie pozorom i atrybutom wysokiego statusu,
          koncentrując się na pozamerytorycznej wartości przekazu (Cialdini R. (
          1994) Wywieranie wpływu na ludzi GWP Gdańsk)."
            visible={visible}>
            burmistrz
          </Highlight>{' '}
          mówi, że tak jest, podkreśla także, że osoby podważające wiarygodność
          informacji zostały przekupione w wyniku istniejącego{' '}
          <Highlight
            type="critical"
            hint="Podstawowy błąd atrybucji – błąd w postrzeganiu społecznym
          polegający na tendencji do wyjaśniania zachowań innych osób w oparciu
          o cechy charakteru i dotychczas podjęte decyzje przy jednoczesnym
          braku uwzględnienia wpływu czynników zewnętrznych i roli przypadku."
            visible={visible}>
            spisku
          </Highlight>.
          <br />
          <br />
          Żródło: precelek.pl
        </div>
      ),
    },
    legit: {
      heading: (
        <div>
          UMIEJĘTNOŚĆ WYKRYWANIA KŁAMSTWA WŚRÓD POLICJANTÓW I PSYCHOLOGÓW
        </div>
      ),
      content: (
        <div>
          Głównym celem przeprowadzonego procesu badawczego
          <Highlight
            type="ok"
            hint="Powołanie się na pierwotne źródło informacji które zawiera
          oryginalny opis badań, obserwacji, spostrzeżeń, teorii, hipotez
          własnych autora"
            visible={visible}>
            (Widacki, Mirska, Wrońska, 2012)
          </Highlight>, było sprawdzenie, jak psycholodzy oraz policjanci z
          pionów śledczych, oceniają diagnostyczność symptomów kłamstwa,
          poruszonych w literaturze przedmiotu. Ponadto zespół badawczy
          postanowił sprawdzić, czy płeć oraz doświadczenie zawodowe mają wpływ,
          na wybór tychże symptomów.
          <Highlight
            type="ok"
            hint="Opis grupy badawczej – dzięki niemu wiemy, że wysnute wnioski
            dotyczą konkretnej grupy osób, a nie ogółu społeczeństwa."
            visible={visible}>
            Grupę badawczą stanowiło 201 osób: 100 policjantów (40 kobiet i 60
            mężczyzn) w średnim wieku 37,4 lat oraz 101 psychologów, (72 kobiet
            i 29 mężczyzn)
          </Highlight>, w średnim wieku 28 lat, którzy według badaczy, ze
          względu na rodzaj świadczonej pracy, zmuszeni są dokonywać oceny
          wiarygodności rozmowy czy przesłuchiwanego.
          <br />
          <br />
          <Highlight
            type="ok"
            hint="Odwołanie się w bibliografii do konkretnych pozycji naukowych do
          których odwoływano się w tekście. Opis bibliograficzny powinien
          zawierać elementy takie jak: autor, tytuł, wydawnictwo, czas i miejsce
          wydania."
            visible={visible}>
            Bibliografia
          </Highlight>: Widacki,J. Mirska,N. Wrońska,M. (2012). Werbalne i
          niewerbalne symptomy kłamstwa w oczach policjantów oraz psychologów,
          Przegląd Bezpieczeństwa Wewnętrznego, 7, 19-30.
        </div>
      ),
    },
  },
  {
    fake: {
      heading: <div>NIESAMOWITE ODKRYCIE BRYTYJSKICH NAUKOWCÓW!</div>,
      content: (
        <div>
          Jeden z{' '}
          <Highlight
            type="critical"
            hint="Tytuł przeczy treści artykułu."
            visible={visible}>
            mieszkańców
          </Highlight>{' '}
          Londynu przez ponad połowę swojego życia spożywał liście tytoniu.
          Dożył aż 103 lat. Możemy informacji zostały przekupione w wyniku
          istniejącego{' '}
          <Highlight
            type="critical"
            hint="Podstawowy błąd atrybucji – błąd w postrzeganiu społecznym
          polegający na tendencji do wyjaśniania zachowań innych osób w oparciu
          o cechy charakteru i dotychczas podjęte decyzje przy jednoczesnym
          braku uwzględnienia wpływu czynników zewnętrznych i roli przypadku."
            visible={visible}>
            spisku
          </Highlight>.
          <br />
          <br />
          Żródło: precelek.pl
        </div>
      ),
    },
    legit: {
      heading: (
        <div>
          UMIEJĘTNOŚĆ WYKRYWANIA KŁAMSTWA WŚRÓD POLICJANTÓW I PSYCHOLOGÓW
        </div>
      ),
      content: (
        <div>
          Głównym celem przeprowadzonego procesu badawczego
          <Highlight
            type="ok"
            hint="Powołanie się na pierwotne źródło informacji które zawiera
          oryginalny opis badań, obserwacji, spostrzeżeń, teorii, hipotez
          własnych autora"
            visible={visible}>
            (Widacki, Mirska, Wrońska, 2012)
          </Highlight>, było sprawdzenie, jak psycholodzy oraz policjanci z
          pionów śledczych, oceniają diagnostyczność symptomów kłamstwa,
          poruszonych w literaturze przedmiotu. Ponadto zespół badawczy
          postanowił sprawdzić, czy płeć oraz doświadczenie zawodowe mają wpływ,
          na wybór tychże symptomów.
          <Highlight
            type="ok"
            hint="Opis grupy badawczej – dzięki niemu wiemy, że wysnute wnioski
            dotyczą konkretnej grupy osób, a nie ogółu społeczeństwa."
            visible={visible}>
            Grupę badawczą stanowiło 201 osób: 100 policjantów (40 kobiet i 60
            mężczyzn) w średnim wieku 37,4 lat oraz 101 psychologów, (72 kobiet
            i 29 mężczyzn)
          </Highlight>, w średnim wieku 28 lat, którzy według badaczy, ze
          względu na rodzaj świadczonej pracy, zmuszeni są dokonywać oceny
          wiarygodności rozmowy czy przesłuchiwanego.
          <br />
          <br />
          <Highlight
            type="ok"
            hint="Odwołanie się w bibliografii do konkretnych pozycji naukowych do
          których odwoływano się w tekście. Opis bibliograficzny powinien
          zawierać elementy takie jak: autor, tytuł, wydawnictwo, czas i miejsce
          wydania."
            visible={visible}>
            Bibliografia
          </Highlight>: Widacki,J. Mirska,N. Wrońska,M. (2012). Werbalne i
          niewerbalne symptomy kłamstwa w oczach policjantów oraz psychologów,
          Przegląd Bezpieczeństwa Wewnętrznego, 7, 19-30.
        </div>
      ),
    },
  },
];
