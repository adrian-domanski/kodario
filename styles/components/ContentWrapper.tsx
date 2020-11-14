import styled from "styled-components";

export default styled.div<{ maxWidth?: number }>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 900)}px;
  margin: 0 auto;
  position: relative;
`;
