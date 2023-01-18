import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */
class Button extends PureComponent {
  render() {
    const {
      text, id, className, onClick,
    } = this.props;

    return (
      <button type="button" className={className} id={id} onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  className: '',
  id: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
