import styled from "styled-components";

interface IProps {
  isCentered?: boolean;
  blueColor?: boolean;
}

export const Paragraph = styled.p<IProps>`
  color: ${({ theme, blueColor }) =>
    blueColor ? theme.colors.darkBlue : theme.colors.darkerBlue};

  ${({ isCentered }) => isCentered && "text-align: center;"};
`;
