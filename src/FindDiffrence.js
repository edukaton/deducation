import React, {Component} from 'react';

import GArticle from 'grommet/components/Article';
import GColumns from 'grommet/components/Columns';

import DifferencePost from './DifferencePost';
import {postsByVisibility} from './FindDiffrencesPosts';

class FindDifference extends Component {
  render() {
    const {visible} = this.props;
    const posts = postsByVisibility(visible);
    return (
      <GArticle colorIndex="light-2">
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
