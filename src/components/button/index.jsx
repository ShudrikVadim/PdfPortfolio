import React from "react";
import PropTypes from "prop-types"
import StyledButton from "./styled";
const Button = ({ children,label, ...rest}) => {
  return <StyledButton {...rest}>  
  <button>
  {label || children}
</button>
</StyledButton>;
};

Button.propTypes = {
  label: PropTypes.string,
  background:PropTypes.string,
  cursor: PropTypes.string,
  outline: PropTypes.string,
  boxSizing: PropTypes.string,
  letterspacing: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
