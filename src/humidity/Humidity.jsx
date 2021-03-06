import React, {PureComponent} from 'react';
import './humidity.css';
import arrow from './arrow.png';
import center from './center.png';
import PropTypes from 'prop-types';

class Humidity extends PureComponent {
  constructor() {
    super(...arguments);
  }

  render() {
    let rotate = this.props.value || 0;
    const {tips = []} = this.props;
    if(rotate < 0) {
      rotate = 0;
    }
    if(rotate > 100) {
      rotate = 100;
    }
    const height = this.props.height || 252;
    const a = height / 252;
    const width = 428 * a;
    const humidityStyles = {
      height: height + 25,
      width: width + 53
    }
    const arrowHeight = 114 * a, arrowWidth = 24 * a;
    const arrowStyle = {
      width: arrowWidth,
      height: arrowHeight,
      bottom: (64 * a) / 2 ,
      left: (width - arrowWidth) / 2 + 25.5,
      transform: `rotate(${(rotate * 180 / 100) - 90}deg)`,
      transformOrigin: `center bottom`
    }
    const centerSize = 41 * a;
    const centerStyle = {
      width: centerSize,
      height: centerSize,
      bottom: (64 * a - centerSize) / 2,
      left: (width - centerSize) / 2 + 25.5
    }
    return (
      <div className="normal" style={humidityStyles}>
        <div className="dry">{tips[0] || 'dry'}</div>
        <div className="comfort">{tips[1] || 'comfort'}</div>
        <div className="wet">{tips[2] || 'wet'}</div>
        <div className="humidity" style={{height, width, backgroundSize: `${width}px`}}></div>
        <img className="arrow" src={arrow} style={arrowStyle}/>
        <img className="center" src={center} style={centerStyle}/>
      </div>
    );
  }
}

Humidity.PropTypes = {
  height: PropTypes.number,
  value: PropTypes.number,
  tips: PropTypes.array
}

export default Humidity;