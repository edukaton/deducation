import React, {Component} from 'react';

import GArticle from 'grommet/components/Article';
import GColumns from 'grommet/components/Columns';

import DifferencePost from './DifferencePost';
import {postsByVisibility} from './FindDiffrencePosts';

class FindDifference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  selectPost = correct => {
    this.setState({visible: true});
  };

  render() {
    const {visible} = this.state;
    const posts = postsByVisibility(visible);
    const postNumber = 0;
    return (
      <GArticle colorIndex="light-2">
        <GColumns masonry={true} justify="center" maxCount={2}>
          <DifferencePost
            heading={posts[postNumber].fake.heading}
            content={posts[postNumber].fake.content}
            onClick={this.selectPost}
            className={!visible && 'post'}
          />
          <DifferencePost
            heading={posts[postNumber].legit.heading}
            content={posts[postNumber].legit.content}
            onClick={this.selectPost}
            className={!visible && 'post'}
          />
        </GColumns>
      </GArticle>
    );
  }
}

export default FindDifference;
