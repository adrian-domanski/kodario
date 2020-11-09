import styled from "styled-components";

const StyledText = styled.h3<{ side: string }>`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 20px;
  position: absolute;
  left: 0;
  top: 50%;
  color: ${({ theme }) => theme.colors.darkerBlue};
  opacity: 0.1;
  transform: rotate(90deg) translateY(200%);
`;

interface IProps {
  side: "LEFT" | "RIGHT";
  text: string;
}

const SideText: React.FC<IProps> = ({ side, text }) => {
  return <StyledText side={side}>{text}</StyledText>;
};

export default SideText;
