import React from 'react';

import GSection from 'grommet/components/Section';
import GParagraph from 'grommet/components/Paragraph';
import GHeading from 'grommet/components/Heading';

import './DifferencePost.css';

const DifferencePost = ({heading, content, ...rest}) => (
  <GSection
    className="post"
    margin="small"
    pad="small"
    colorIndex="light-1"
    size={{
      height: 'large',
      width: 'large',
    }}
    {...rest}>
    <GHeading tag="h3" className="heading">{heading}</GHeading>
    <GParagraph className="paragraph">{content}</GParagraph>
  </GSection>
);

export default DifferencePost;
