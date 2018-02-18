import React, {PureComponent} from 'react';

import GImage from 'grommet/components/Image';
import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';

import caseClosed from '../assets/case-closed.png';
import order from '../assets/order.svg';

class ExitPage extends PureComponent {
  render() {
    return (
      <div className="content-wrapper">
        <div className="columns">
          <GSection className="section post">
            <GParagraph className="paragraph limited" align="center" size="large">
              Moje gratulacje drogi Watsonie! Pokonałeś Moriarty’ego, a jego laboratorium zostało zniszczone! Mieszkańcy Londynu mogą odetchnąć z ulgą.
              W nagrodę za Twoje zasługi Królowa Matka przyznała Ci Order Imperium Brytyjskiego!
            </GParagraph>
            <GImage src={caseClosed} size="large" className="image" />
          </GSection>
          <GImage src={order} size="small" className="image" />
        </div>
      </div>
    );
  }
}

export default ExitPage;
