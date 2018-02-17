import React from 'react';

import GTip from 'grommet/components/Tip';

import './Highlight.css';

let count = 0;

const Highlight = ({children, type, hint, visible}) => {
  const id = count++;
  return (
    <React.Fragment>
      {visible &&
        hint && (
          <div className="highlight__tip">
            <GTip
              className="highlight__tip"
              target={`highlight--${id}`}
              colorIndex="light-2">
              {hint}
            </GTip>
          </div>
        )}
      <span
        className={
          visible &&
          `highlight highlight--${id} ${type && `highlight--${type}`}`
        }>
        {children}
      </span>
    </React.Fragment>
  );
};

export default Highlight;
