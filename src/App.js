import React, {PureComponent} from 'react';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GSection from 'grommet/components/Section';
import GFooter from 'grommet/components/Footer';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GAnchor from 'grommet/components/Anchor';
import GButton from 'grommet/components/Button';

import Logo from './Logo';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <GApp className="app" centered={false}>
        <GArticle className="article">
          <GSection className="section">
            <Logo />
            <GHeading align="center" strong={true}>
              Dedukacja
            </GHeading>
            <GParagraph className="paragraph" align="center" size="large">
              Część I: Sherlock i fatalne fake newsy
            </GParagraph>
            <GButton className="button" primary={true} onClick={() => {}}>
              Rozpocznij
            </GButton>
          </GSection>
          <GFooter className="footer" size="large">
            <GAnchor align="center">Żródła</GAnchor>
          </GFooter>
        </GArticle>
      </GApp>
    );
  }
}

export default App;
