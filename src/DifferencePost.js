import React, {Component} from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';

import Highlight from './Highlight';

class DifferencePost extends Component {
  render() {
    const {heading, content} = this.props;
    return (
      <GSection
        margin="medium"
        pad="medium"
        colorIndex="light-1"
        size={{
          height: 'large',
          width: 'large',
        }}>
        <GHeading tag="h4">{heading}</GHeading>
        <GParagraph>{content}</GParagraph>
      </GSection>
    );
  }
}

export default DifferencePost;
