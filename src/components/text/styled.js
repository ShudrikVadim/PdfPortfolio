import styled from "styled-components";
import globalColors from "../../utils/globalColors";

const StyledText = styled.span`
  color: ${(props) => props.color || globalColors.black};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  line-height: ${(props) => props.lineHeight || "normal"};
  text-align: ${(props) => props.textAlign || "start"};
  padding: ${(props) => props.padding || "10"};
  margin: ${(props) => props.margin || "10"};
`;

export default StyledText;
