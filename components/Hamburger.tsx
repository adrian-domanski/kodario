import styled from "styled-components";

const StyledHamburger = styled.button<{
  isActive: boolean;
}>`
  background: ${({ isActive }) => (isActive ? "#0d222e" : "transparent")};
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  height: 49px;
  padding: 10px 8px;
  color: #fff;
  margin-right: 1rem;
  transition: background-color 0.5s ease-in-out;

  span {
    width: 90%;
    margin: 0 auto;
    height: 5px;
    border-radius: 1px;
    background: ${({ theme }) => theme.colors.lightWhite};
    display: block;
  }

  @media screen and (min-width: 998px) {
    display: none;
  }

  &.fade-in {
    span:nth-child(1) {
      animation: topBar 0.5s forwards;
    }

    span:nth-child(2) {
      animation: middleBar 0.5s forwards;
    }

    span:nth-child(3) {
      animation: bottomBar 0.5s forwards;
    }
  }

  &.fade-out {
    span:nth-child(1) {
      animation: topBarReverse 0.5s forwards;
    }

    span:nth-child(2) {
      animation: middleBarReverse 0.5s forwards;
    }

    span:nth-child(3) {
      animation: bottomBarReverse 0.5s forwards;
    }
  }

  @keyframes topBar {
    0% {
      transform: translateY(0) rotate(0);
    }

    50% {
      transform: translateY(12px) rotate(0);
    }

    100% {
      transform: translateY(12px) rotate(45deg);
    }
  }

  @keyframes topBarReverse {
    0% {
      transform: translateY(12px) rotate(45deg);
    }

    50% {
      transform: translateY(12px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  @keyframes bottomBar {
    0% {
      transform: translateY(0) rotate(0);
    }

    50% {
      transform: translateY(-12px) rotate(0);
    }

    100% {
      transform: translateY(-12px) rotate(-45deg);
    }
  }

  @keyframes bottomBarReverse {
    0% {
      transform: translateY(-12px) rotate(-45deg);
    }

    50% {
      transform: translateY(-12px) rotate(0);
    }

    100% {
      transform: translateY(0) rotate(0);
    }
  }

  @keyframes middleBar {
    0% {
      transform: scale(1);
    }
    51% {
      transform: scale(1);
    }

    50% {
      transform: scale(0);
    }

    100% {
      transform: scale(0);
    }
  }

  @keyframes middleBarReverse {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(1);
    }
  }
`;

interface IProps {
  toggleMobileMenu: () => void;
  className?: string;
  isActive: boolean;
}

const Hamburger: React.FC<IProps> = ({
  toggleMobileMenu,
  className,
  isActive,
}) => {
  return (
    <StyledHamburger
      onClick={toggleMobileMenu}
      isActive={isActive}
      className={className}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburger>
  );
};

export default Hamburger;
