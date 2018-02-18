import React, {Component} from 'react';

import './MemoCard.css';

class MemoCard extends Component {
  render() {
    const {text, selected, className, quote, reveal, onClick} = this.props;
    return (
        <div
          className={`${className} memo-card ${
            selected && !reveal ? 'memo-card--selected' : ''
            } ${reveal ? 'memo-card--reveal' : ''}`}
          onClick={!reveal ? onClick : null}>
          <div className="memo-card__flipper">
            <div
              className={`memo-card__face ${
                quote ? 'memo-card__face--quote' : ''
                }`}>
              {text}
            </div>
            <div className="memo-card__back" />
          </div>
        </div>
    );
  }
}

export default MemoCard;
