import React, {PureComponent} from 'react';

import GSection from 'grommet/components/Section';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';

class SourcesPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <GSection className="section post">
          <GHeading margin="medium" align="center" strong={true}>
            Źródła
          </GHeading>
          <GParagraph className="paragraph" size="small" margin="small">
            Kahneman, D. (2012). Pułapki myślenia: o myśleniu szybkim i wolnym. Poznań: Media Rodzina.<br/>
            T. Tyszka: Psychologiczne pułapki oceniania i podejmowania decyzji. Gdańsk: Gdańskie Wydawnictwo Psychologiczne, 1999, s. 35. ISBN 8385416951. OCLC 749621473.<br/>
            Michael Shermer. Łatwowierny mózg. „Świat Nauki”. nr. 8 (240), s. 72, sierpień 2011. Prószyński Media. ISSN 0867-6380.<br/>
            Such, J., (1986). Szkice o dialektyce, KiW, Warszawa, s. 270.<br/>
            Widacki,J. Mirska,N. Wrońska,M. (2012). Werbalne i niewerbalne symptomy kłamstwa w oczach policjantów oraz psychologów, Przegląd Bezpieczeństwa Wewnętrznego, 7, 19-30.<br/>
            Do People Only Use 10 Percent Of Their Brains (ang.). Scientific American, 7 lutego 2008. [dostęp 2018-02-19].<br/>
            Coffield, F., Moseley, D., Hall, E. i Ecclestone, K. (2004). Learning styles and pedagogy in post-16 learning: A systematic and critical review.<br/>
          </GParagraph>
        </GSection>
        <GSection className="section post">
          <GHeading margin="medium" align="center" strong={true}>
            Ikony
          </GHeading>
          <GParagraph className="paragraph" size="small" margin="small">
            sherlock holmes by Matthew Davis from the Noun Project,<br/>
            Big Ben by Ben Markoch from the Noun Project,<br/>
            Dog by Sewon Park from the Noun Project,<br/>
            Bacteria by Ilsur Aptukov from the Noun Project,<br/>
            murder by Aldric Rodríguez from the Noun Project,<br/>
            Lantern by Vidhi Doshi from the Noun Project,<br/>
            Medal by Xinh Studio from the Noun Project,<br/>
            Question by Nikita Kozin from the Noun Project,<br/>
            person by Gregor Cresnar from the Noun Project,<br/>
          </GParagraph>
        </GSection>
      </div>
    );
  }
}

export default SourcesPage;
