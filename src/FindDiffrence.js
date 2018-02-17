import React, {Component} from 'react';

import GArticle from 'grommet/components/Article';
import GSection from 'grommet/components/Section';
import GColumns from 'grommet/components/Columns';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';

import DifferencePost from './DifferencePost';
import Highlight from './Highlight';

const postsByVisibility = visible => ({
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
        Londynu przez ponad połowę swojego życia spożywał liście tytoniu. Dożył
        aż 103 lat. Możemy wnioskować, iż ich spożywanie jest w stanie znacznie
        przedłużyć średnią długość życia mieszkańców naszego miasta. Również
        nasz burmistrz mówi, że tak jest, podkreśla także, że osoby podważające
        wiarygodność informacji zostały przekupione w wyniku istniejącego
        spisku.
      </div>
    ),
  },
  legit: {
    heading: (
      <div>UMIEJĘTNOŚĆ WYKRYWANIA KŁAMSTWA WŚRÓD POLICJANTÓW I PSYCHOLOGÓW</div>
    ),
    content: (
      <div>
        Głównym celem przeprowadzonego procesu badawczego (Widacki, Mirska,
        Wrońska, 2012), było sprawdzenie, jak psycholodzy oraz policjanci z
        pionów śledczych, oceniają diagnostyczność symptomów kłamstwa,
        poruszonych w literaturze przedmiotu. Ponadto zespół badawczy postanowił
        sprawdzić, czy płeć oraz doświadczenie zawodowe mają wpływ, na wybór
        tychże symptomów. Grupę badawczą stanowiło 201 osób: 100 policjantów (40
        kobiet i 60 mężczyzn) w średnim wieku 37,4 lat oraz 101 psychologów, (72
        kobiet i 29 mężczyzn), w średnim wieku 28 lat, którzy według badaczy, ze
        względu na rodzaj świadczonej pracy, zmuszeni są dokonywać oceny
        wiarygodności rozmowy czy przesłuchiwanego.
        <br />
        <br />
        Bibliografia: Widacki,J. Mirska,N. Wrońska,M. (2012). Werbalne i
        niewerbalne symptomy kłamstwa w oczach policjantów oraz psychologów,
        Przegląd Bezpieczeństwa Wewnętrznego, 7, 19-30.
      </div>
    ),
  },
});

class FindDifference extends Component {
  render() {
    const {visible} = this.props;
    const posts = postsByVisibility(visible);
    return (
      <GArticle colorIndex="light-2" full={true}>
        <GSection colorIndex="light-1">
          <GHeading align="center">Section bla bla</GHeading>
          <GParagraph align="center">Section bla bla</GParagraph>
        </GSection>
        <GColumns masonry={true} justify="center" maxCount={2}>
          <DifferencePost
            heading={posts.fake.heading}
            content={posts.fake.content}
          />
          <DifferencePost
            heading={posts.legit.heading}
            content={posts.legit.content}
          />
        </GColumns>
      </GArticle>
    );
  }
}

export default FindDifference;
