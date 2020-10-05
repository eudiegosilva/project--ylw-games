import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuFullScreenProps = {
  isOpen: boolean;
};

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    margin: 1rem;
    width: 2.4rem;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;

export const RightGroupWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;

export const MenuFullScreen = styled.nav<MenuFullScreenProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    bottom: 0;
    height: 100vh;
    left: 0;
    opacity: ${isOpen ? 1 : 0};
    overflow: hidden;
    pointer-events: ${isOpen ? 'all' : 'none'};
    position: absolute;
    right: 0;
    transition: 0.3s ease-in-out;
    top: 0;
    z-index: ${theme.layers.alwaysOnTop};
    position: fixed;

    > svg {
      cursor: pointer;
      height: 2.4rem;
      margin: ${theme.spacings.xsmall};
      position: absolute;
      right: 0;
      top: 0;
      width: 2.4rem;
    }

    ${MenuFullScreenNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuFullScreenLink} {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: 0.3s ease-in-out;
    }

    ${RegisterBoxWrapper} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: 0.3s ease-in-out;
    }
  `}
`;

export const MenuFullScreenNav = styled.div`
  ${media.greaterThan('medium')`
    ${({ theme }) => css`
      margin-left: ${theme.spacings.small};
    `}
  `}
`;

export const MenuFullScreenLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    color: ${theme.colors.white};

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const RegisterBoxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

export const TextWrapper = styled.span``;

export const CreateAccountWrapper = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;

export const LoggedContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
