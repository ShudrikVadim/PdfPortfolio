import styled from "styled-components";

const StyledButton = styled.button`
  cursor: ${(props) => props.cursor || "auto"};
  white-space: ${(props) => props.whiteSpace || "normal"};
  outline: ${(props) => props.outline || "none"};
  box-sizing: ${(props) => props.boxSizing || "border-box"};
  letter-spacing: ${(props) => props.letterspacing || "normal"};
  border: ${(props) => props.border || "none"};
  border-color: ${(props) => props.borderColor || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  background: ${(props) => props.background || "none"};
  font-size: ${(props) => props.fontSize || "2rem"};

  &:hover {
    transform:scale(1.1);
  };
`;

export default StyledButton;
