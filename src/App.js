import React, { Component } from 'react';

import GApp from 'grommet/components/App';
import GArticle from 'grommet/components/Article';
import GSection from 'grommet/components/Section';
import GFooter from 'grommet/components/Footer';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GAnchor from 'grommet/components/Anchor';
import GButton from 'grommet/components/Button';
import GHeader from 'grommet/components/Header';
import GBox from 'grommet/components/Box';
import SVGIcon from 'grommet/components/SVGIcon';

import Logo from './Logo';
import './App.css';

class App extends Component {
  setIntroPage = () => this.setState({ page: 'intro' });
  setLandingPage = () => this.setState({ page: 'landing' });

  constructor(props) {
    super(props);

    this.state = { page: 'landing' };
  }

  render() {
    return (
      <GApp className="app" centered={false}>
        <GArticle className="article">
          {
            this.state.page === 'landing' ?
              null : (
                <GHeader className="header">
                  <Logo size="medium" />
                  <GButton className="button" primary={true} onClick={this.setLandingPage}>
                    Dedukacja
                  </GButton>
                </GHeader>
              )
          }
          {
            this.state.page === 'landing' ? (
              <GSection className="section landing">
                <Logo size="huge" />
                <GHeading align="center" strong={true}>
                  Dedukacja
                </GHeading>
                <GParagraph className="paragraph" align="center" size="large">
                  Część I: Sherlock i fatalne fake newsy
                </GParagraph>
                <GButton className="button" primary={true} onClick={this.setIntroPage}>
                  Rozpocznij
                </GButton>
              </GSection>
            ) : (
              <GSection className="section">
                <GBox align="center">
                  <GHeading align="center" strong={true}>
                    Wstęp
                  </GHeading>
                  <GParagraph className="paragraph" align="center" size="large" margin="small">
                    Londyn, rok 2018. Krajobraz za oknem przeglądarki spowity jest gęstą mgłą, a bezdomne psy schroniły się w otwartych bramach przed nadchodzącą ulewą.
                  </GParagraph>
                  <GParagraph className="paragraph" align="center" size="large" margin="small">
                    Mimo to, życie społecznościowe wydaje się tętnić. Facebookowe ulice pełne są dyliżansów pędzących na zbliżające się eventy, młodzi chłopcy z gazetami rozdają najnowsze podcasty.
                  </GParagraph>
                  <GParagraph className="paragraph" align="center" size="large" margin="small">
                    Sieciową sielankę przerywa jednak niepokojąca informacja o najnowszym dokonaniu profesora Moriarty’ego – z jego laboratorium wyciekły, toksyczne <span className="highlight">fatalne fake newsy</span>.
                  </GParagraph>
                  <GParagraph className="paragraph" align="center" size="large" margin="small">
                    Pomóż Sherlockowi rozwiązać zagadkę niepewnych źródeł i ocal świat przed zalewem niesprawdzonych danych. Twoja przygoda zaczyna się teraz!
                  </GParagraph>
                  <GButton className="button" primary={true} onClick={this.setIntroPage}>
                    Dalej
                  </GButton>
                </GBox>
                <GBox align="center">
                  <SVGIcon
                    className="icon"
                    size="huge"
                    viewBox="0 0 24.372999 87.510002"
                    width="24.372999"
                    height="87.510002"
                  >
                    <path
                      d="m 24.373,81.542 v 4.968 c 0,0.553 -0.447,1 -1,1 -0.553,0 -1,-0.447 -1,-1 V 82.542 H 20.87 c -0.553,0 -1,-0.447 -1,-1 V 47.363 c 0,-0.552 0.447,-1 1,-1 h 0.967 V 29.291 h -1.444 c -0.391,0 -0.745,-0.227 -0.908,-0.581 L 15.253,19.533 C 15.192,19.402 15.161,19.259 15.161,19.114 V 14.425 L 12.187,8.572 9.213,14.425 v 3.688 h 3.683 c 0.553,0 1,0.448 1,1 0,0.552 -0.447,1 -1,1 H 8.854 l -3.31,7.177 h 2.999 c 0.552,0 1,0.448 1,1 0,0.552 -0.448,1 -1,1 H 3.981 3.86 2.537 v 17.072 h 0.967 8.684 c 0.552,0 1,0.448 1,1 0,0.005 -0.003,0.009 -0.003,0.015 0,0.003 0.002,0.006 0.002,0.01 v 13.746 c 0,0.553 -0.447,1 -1,1 -0.553,0 -1,-0.447 -1,-1 V 48.363 H 9.213 v 28.392 c 0,0.553 -0.448,1 -1,1 -0.552,0 -1,-0.447 -1,-1 V 48.363 H 4.504 v 33.179 c 0,0.553 -0.448,1 -1,1 H 2 v 3.968 c 0,0.553 -0.448,1 -1,1 -0.552,0 -1,-0.447 -1,-1 v -4.968 c 0,-0.553 0.448,-1 1,-1 H 2.504 V 48.363 H 1.537 c -0.552,0 -1,-0.447 -1,-1 V 28.291 c 0,-0.552 0.448,-1 1,-1 h 1.804 l 3.873,-8.397 v -4.708 c 0,-0.157 0.037,-0.312 0.108,-0.453 L 11.188,6.126 V 1 c 0,-0.552 0.448,-1 1,-1 0.552,0 1,0.448 1,1 v 5.124 l 3.866,7.608 c 0.071,0.141 0.108,0.296 0.108,0.453 v 4.709 l 3.872,8.396 h 1.805 c 0.553,0 1,0.448 1,1 v 19.072 c 0,0.553 -0.447,1 -1,1 h -0.967 v 32.179 h 1.503 c 0.551,0.001 0.998,0.448 0.998,1.001 z M 18.649,37.623 c 0,3.563 -2.899,6.462 -6.462,6.462 -3.563,0 -6.462,-2.899 -6.462,-6.462 0,-3.563 2.899,-6.462 6.462,-6.462 3.562,0 6.462,2.899 6.462,6.462 z m -2,0 c 0,-2.46 -2.002,-4.462 -4.462,-4.462 -2.46,0 -4.462,2.002 -4.462,4.462 0,2.46 2.002,4.462 4.462,4.462 2.46,0 4.462,-2.001 4.462,-4.462 z m -3.316,0.033 1.055,-1.762 c 0.284,-0.474 0.13,-1.088 -0.344,-1.372 -0.472,-0.283 -1.088,-0.129 -1.372,0.344 l -1.344,2.243 c -0.021,0.034 -0.022,0.073 -0.038,0.108 -0.028,0.063 -0.052,0.123 -0.067,0.19 -0.014,0.063 -0.019,0.124 -0.021,0.188 -0.002,0.063 0,0.124 0.01,0.187 0.011,0.068 0.032,0.131 0.057,0.195 0.014,0.036 0.013,0.074 0.032,0.109 l 1.344,2.565 c 0.179,0.341 0.526,0.536 0.887,0.536 0.156,0 0.315,-0.037 0.463,-0.114 0.489,-0.256 0.679,-0.861 0.422,-1.35 z"
                    />
                  </SVGIcon>
                </GBox>
              </GSection>
            )
          }
          <GFooter className="footer" size="small">
            <GAnchor align="center">
              Żródła
            </GAnchor>
          </GFooter>
        </GArticle>
      </GApp>
    );
  }
}

export default App;
