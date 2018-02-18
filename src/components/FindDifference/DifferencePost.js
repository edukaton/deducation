import React from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';

import './DifferencePost.css';

const DifferencePost = ({heading, content, ...rest}) => (
  <GSection
    margin="medium"
    pad="medium"
    colorIndex="light-1"
    size={{
      height: 'large',
      width: 'large',
    }}
    {...rest}>
    <GHeading tag="h3">{heading}</GHeading>
    <GParagraph>{content}</GParagraph>
  </GSection>
);

export default DifferencePost;
