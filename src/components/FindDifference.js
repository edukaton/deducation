import React, {Component} from 'react';

import GSection from 'grommet/components/Section';
import GColumns from 'grommet/components/Columns';
import GAnimate from 'grommet/components/Animate';
import GPulse from 'grommet/components/icons/Pulse';
import GFormNext from 'grommet/components/icons/base/FormNext';
import GNotification from 'grommet/components/Notification';

import DifferencePost from './DifferencePost';
import FindDifferenceIntro from './FindDifferenceIntro';
import FindDifferenceNotification from './FindDifferenceNotification';
import './FindDifference.css';
import {postsByVisibility} from './FindDifferencePosts';

class FindDifference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intro: true,
      visible: false,
      correct: [],
      postNumber: 0,
    };
  }

  selectPost = correctSelected => () => {
    const {correct, postNumber} = this.state;
    correct[postNumber] = correctSelected;
    this.setState({visible: true, correct});
  };

  hideIntro = () => this.setState({intro: false});

  next = () => {
    const {intro, visible, postNumber} = this.state;

    if (intro || !visible) {
      return;
    }

    this.setState({postNumber: postNumber + 1, visible: false});
  };

  render() {
    const {visible, intro, correct, postNumber} = this.state;
    const posts = postsByVisibility(visible);

    return intro ? (
      <FindDifferenceIntro hideIntro={this.hideIntro} />
    ) : (
      <React.Fragment>
        <GAnimate
          enter={{animation: 'fade', duration: 1000, delay: 0}}
          leave={{animation: 'fade', duration: 1000, delay: 0}}>
          {visible ? (
            <FindDifferenceNotification correct={correct[postNumber]} />
          ) : (
            <GNotification>
              Wybierz tekst budzący twoje podejrzenia.
            </GNotification>
          )}
        </GAnimate>
        <GSection colorIndex="light-2">
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <GColumns masonry={true} justify="center" maxCount={2}>
              <DifferencePost
                heading={posts[postNumber].fake.heading}
                content={posts[postNumber].fake.content}
                onClick={!visible && this.selectPost(true)}
                className={!visible && 'post'}
              />
              <DifferencePost
                heading={posts[postNumber].legit.heading}
                content={posts[postNumber].legit.content}
                onClick={!visible && this.selectPost(false)}
                className={!visible && 'post'}
              />
            </GColumns>
          </GAnimate>
          <GAnimate
            className="button--next"
            visible={visible && postNumber < posts.length - 1}
            enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <GPulse onClick={this.next} icon={<GFormNext />} />
          </GAnimate>
        </GSection>
      </React.Fragment>
    );
  }
}

export default FindDifference;
