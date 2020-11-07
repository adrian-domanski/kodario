import styled from "styled-components";

interface IProps {
  isCentered?: boolean;
  blueColor?: boolean;
  fontWeight?: string;
}

export const Paragraph = styled.p<IProps>`
  color: ${({ theme, blueColor }) =>
    blueColor ? theme.colors.darkBlue : theme.colors.darkerBlue};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  font-size: 1.1rem;

  ${({ isCentered }) => isCentered && "text-align: center;"};
`;
