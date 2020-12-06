import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

type NavLinkProps = {
  isActive?: boolean;
};

const navLinkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
  `,
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.black};
  `
};

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;

    ${media.greaterThan('medium')`
      flex-direction: column;
      border: none;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.gallery};
      }
    `}
  `}
`;

export const NavLink = styled.a<NavLinkProps>`
  ${({ theme, isActive }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.black};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}

    svg {
      width: 2.4rem;
    }

    ${!isActive && navLinkModifiers.default(theme)}
    ${isActive && navLinkModifiers.active(theme)}
  `}
`;
