import React, {Component} from 'react';

import GTip from 'grommet/components/Tip';

import './Highlight.css';

let count = 0;

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {showTip: false};
  }

  toggleTip = () => this.setState({showTip: !this.state.showTip});

  render() {
    const id = count++;
    const {showTip} = this.state;
    const {children, type, hint, visible} = this.props;

    return (
      <React.Fragment>
        {visible &&
          showTip &&
          hint && (
            <div className="highlight__tip">
              <GTip
                className="highlight__tip"
                target={`highlight--${id}`}
                colorIndex="light-2"
                onClose={this.toggleTip}>
                {hint}
              </GTip>
            </div>
          )}
        <span
          onClick={this.toggleTip}
          className={
            visible &&
            `highlight highlight--${id} ${type && `highlight--${type}`}`
          }>
          {children}
        </span>
      </React.Fragment>
    );
  }
}

export default Highlight;
