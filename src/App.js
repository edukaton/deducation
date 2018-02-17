import React, { PureComponent } from 'react';
import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GSection from 'grommet/components/Section';
import GImage from 'grommet/components/Image';
import GFooter from 'grommet/components/Footer';
import GTitle from 'grommet/components/Title';
import GHeading from 'grommet/components/Heading';
import sherlock from './sherlock.svg';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <GApp centered={false}>
        <GArticle className="article">
          <GSection>
            <GImage src={sherlock} alt="sherlock" size="small" />
            <GTitle>
              <GHeading>
                Dedukacja
              </GHeading>
            </GTitle>
          </GSection>
        </GArticle>
        <GFooter />
      </GApp>
    );
  }
}

export default App;
