import React, {Component} from 'react';

import GSection from 'grommet/components/Section';
import GColumns from 'grommet/components/Columns';
import GAnimate from 'grommet/components/Animate';

import DifferencePost from './DifferencePost';
import FindDifferenceIntro from './FindDifferenceIntro';
import FindDifferenceNotification from './FindDifferenceNotification';
import {postsByVisibility} from './FindDifferencePosts';

class FindDifference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: true,
      visible: false,
      correct: [],
    };
  }

  selectPost = (postNumber, correctSelected) => () => {
    const {correct} = this.state;
    correct[postNumber] = correctSelected;
    this.setState({visible: true, correct});
  };

  hideIntro = () => this.setState({intro: false});

  render() {
    const {visible, intro, correct} = this.state;
    const posts = postsByVisibility(visible);
    const postNumber = 0;

    return intro ? (
      <FindDifferenceIntro hideIntro={this.hideIntro} />
    ) : (
      <React.Fragment>
        <GAnimate
          visible={visible}
          keep={true}
          enter={{animation: 'fade', duration: 1000, delay: 0}}>
          <FindDifferenceNotification correct={correct[postNumber]} />
        </GAnimate>
        <GSection colorIndex="light-2">
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <GColumns masonry={true} justify="center" maxCount={2}>
              <DifferencePost
                heading={posts[postNumber].fake.heading}
                content={posts[postNumber].fake.content}
                onClick={!visible && this.selectPost(postNumber, false)}
                className={!visible && 'post'}
              />
              <DifferencePost
                heading={posts[postNumber].legit.heading}
                content={posts[postNumber].legit.content}
                onClick={!visible && this.selectPost(postNumber, true)}
                className={!visible && 'post'}
              />
            </GColumns>
          </GAnimate>
        </GSection>
      </React.Fragment>
    );
  }
}

export default FindDifference;
