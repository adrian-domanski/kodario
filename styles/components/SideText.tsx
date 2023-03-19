import styled from 'styled-components';

const StyledText = styled.span<{ side: string; minWidthDisplay?: number }>`
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 20px;
  position: absolute;
  top: 50%;
  color: ${({ theme }) => theme.colors.darkerBlue};
  opacity: 0.05;
  transform: rotate(90deg) translate(50%, 50%);
  transform-origin: 100% 50%;

  @media screen and (max-width: 1700px) {
    display: none;
  }

  ${({ minWidthDisplay }) =>
    !!minWidthDisplay &&
    `
    @media screen and (max-width: ${minWidthDisplay}px) {
      display: none;
    }
  `}

  ${({ side }) => {
    if (side === 'LEFT') {
      return `
      left: -95%;
      `;
    } else if (side === 'RIGHT') {
      return `
      right: -40%;
      `;
    }
  }}
`;

interface IProps {
  side: 'LEFT' | 'RIGHT';
  text: string;
  minWidthDisplay?: number;
}

const SideText: React.FC<IProps> = ({ side, text, minWidthDisplay }) => {
  return (
    <StyledText
      side={side}
      minWidthDisplay={minWidthDisplay}
      aria-hidden='true'
    >
      {text}
    </StyledText>
  );
};

export default SideText;
