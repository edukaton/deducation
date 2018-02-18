import React, {Component} from 'react';

import {reverse} from 'lodash';
import GSection from 'grommet/components/Section';
import GAnimate from 'grommet/components/Animate';
import GPulse from 'grommet/components/icons/Pulse';
import GFormNext from 'grommet/components/icons/base/FormNext';
import GNotification from 'grommet/components/Notification';

import DifferencePost from './DifferencePost';
import FindDifferenceNotification from './FindDifferenceNotification';
import {postsByVisibility} from './FindDifferencePosts';
import NavButtons from '../NavButtons';

import './FindDifference.css';

class FindDifferencePage extends Component {
  constructor(props) {
    super(props);

    this.seed = Math.round(Math.random() * 8 + 0.5);

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

  next = () => {
    const {intro, visible, postNumber} = this.state;

    if (intro || !visible) {
      return;
    }

    this.setState({postNumber: postNumber + 1, visible: false});
  };

  render() {
    const {visible, correct, postNumber} = this.state;
    let posts = postsByVisibility(visible);

    if (this.seed & 1) {
      posts = reverse(posts);
    }
    if (this.seed & 2) {
      posts[0] = reverse(posts[0]);
    }
    if (this.seed & 4) {
      posts[1] = reverse(posts[1]);
    }

    return (
      <div className="content-wrapper">
        <GAnimate
          className="notification"
          enter={{animation: 'fade', duration: 1000, delay: 0}}
          leave={{animation: 'fade', duration: 1000, delay: 0}}>
          {visible ? (
            <FindDifferenceNotification
              className="find-difference__notification"
              correct={correct[postNumber]}
            />
          ) : (
            <GNotification>
              Wybierz tekst budzący twoje podejrzenia.
            </GNotification>
          )}
        </GAnimate>
        <GSection>
          <GAnimate enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <div className="columns">
              {posts[postNumber].map(({fake, heading, content}) => (
                <DifferencePost
                  key={heading.split(' ')[0]}
                  heading={heading}
                  content={content}
                  onClick={!visible ? this.selectPost(fake) : null}
                />
              ))}
            </div>
          </GAnimate>
          <GAnimate
            className="button--next"
            visible={visible && postNumber < posts.length - 1}
            enter={{animation: 'slide-up', duration: 1000, delay: 0}}>
            <GPulse onClick={this.next} icon={<GFormNext />} />
          </GAnimate>
        </GSection>
        <NavButtons prev="/znajdz-roznice/instrukcja" next="/lampki/teoria" />
      </div>
    );
  }
}

export default FindDifferencePage;
