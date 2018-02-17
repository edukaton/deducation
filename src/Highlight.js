import React, {Component} from 'react';

import GTip from 'grommet/components/Tip';

import './Highlight.css';

let count = 0;

const Highlight = ({children, type, hint}) => {
  const id = count++;
  return (
    <React.Fragment>
      {hint && (
        <GTip target={`highlight--${id}`} colorIndex="light-2">
          {hint}
        </GTip>
      )}
      <span
        className={`highlight highlight--${id} ${type &&
          `highlight--${type}`}`}>
        {children}
      </span>
    </React.Fragment>
  );
};

export default Highlight;
