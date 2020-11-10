import styled from "styled-components";

const StyledMouse = styled.a`
  width: 3.5em;
  height: 6em;
  transform: scale(0.7) translateX(-50%);
  opacity: 0.7;
  position: absolute;
  left: 50%;
  bottom: 5%;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
  cursor: pointer;
  transition: opacity 0.2s ease-in, background-color 0.2s ease-in,
    transform 0.2s ease-in;
  display: none;
  transform-origin: left;

  @media screen and (min-width: 998px) {
    display: block;
  }

  :hover {
    opacity: 1;
    background: #eff3f6;
    transform: scale(0.8) translateX(-50%);
  }

  #wheel {
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    width: 0.75em;
    height: 0.75em;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border-radius: 50%;
  }
  .scroll2 {
    opacity: 0;
    margin-left: auto;
    margin-right: auto;
    width: 0px;
    height: 0px;
    border-left: 0.35em solid transparent;
    border-right: 0.35em solid transparent;
    border-top: 0.4em solid ${({ theme }) => theme.colors.darkBlue};
    -webkit-animation: down2 1s infinite;
    animation: down2 1s infinite;
  }
  .scroll3 {
    opacity: 0;
    margin-left: auto;
    margin-right: auto;
    width: 0px;
    height: 0px;
    border-left: 0.35em solid transparent;
    border-right: 0.35em solid transparent;
    border-top: 0.4em solid ${({ theme }) => theme.colors.darkBlue};
    -webkit-animation: down 1s infinite;
    animation: down 1s infinite;
  }
  .scroll {
    opacity: 0;
    margin-left: auto;
    margin-right: auto;
    width: 0px;
    height: 0px;
    border-left: 0.35em solid transparent;
    border-right: 0.35em solid transparent;
    border-top: 0.4em solid ${({ theme }) => theme.colors.darkBlue};
    -webkit-animation: down3 1s infinite;
    animation: down3 1s infinite;
  }
  @-webkit-keyframes down {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(2.3em);
    }
  }
  @-webkit-keyframes down2 {
    40% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
      transform: translateY(2.3em);
    }
  }
  @-webkit-keyframes down3 {
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0.2;
      transform: translateY(2.3em);
    }
  }
  @keyframes down {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(2.3em);
    }
  }
  @keyframes down2 {
    40% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
      transform: translateY(2.3em);
    }
  }
  @keyframes down3 {
    60% {
      opacity: 0;
    }
    100% {
      opacity: 0.2;
      transform: translateY(2.3em);
    }
  }
  #text {
    font-family: "Lato";
    font-size: 1em;
    text-align: center;
    margin-top: 0.5em;
    color: ${({ theme }) => theme.colors.darkBlue};
  }
`;

interface IProps {
  scrollToId: string;
}

const ScrollBottomIcon: React.FC<IProps> = ({ scrollToId }) => {
  return (
    <StyledMouse href={`#${scrollToId}`}>
      <div id="wheel"></div>
      <div className="scroll"></div>
      <div className="scroll2"></div>
      <div className="scroll3"></div>
    </StyledMouse>
  );
};

export default ScrollBottomIcon;
