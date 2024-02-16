import React from 'react';
import PropTypes from 'prop-types';
import StyledText from './styled';

const Text = ({ as, children, label, ...rest }) => {
  const asText = as ? as : 'span';
  return (
    <StyledText as={asText} {...rest}>
      {label || children}
    </StyledText>
  );
};

Text.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    lineHeight: PropTypes.string,
    textAlign: PropTypes.string,
    padding: PropTypes.string,
    margin: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,   
};

export default Text;
