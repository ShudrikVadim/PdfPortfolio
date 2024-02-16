import React from "react";
import StyledBox from "./styled";
import PropTypes from "prop-types"
const Box = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

Box.propTypes = {
  flexDirection: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexWrap: PropTypes.string,
  alignContent: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  whiteSpace: PropTypes.string,
};

export default Box;
