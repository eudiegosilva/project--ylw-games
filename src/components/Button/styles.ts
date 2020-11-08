import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    background: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    border: none;
    color: ${theme.colors.secondary};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    transition: background 0.3s;
    text-decoration: none;

    &:hover {
      background: ${minimal ? 'none' : theme.colors.primaryHover};
    }

    ${!!size && buttonModifiers[size](theme)};
    ${!!fullWidth && buttonModifiers.fullWidth};
    ${!!hasIcon && buttonModifiers.withIcon(theme)};
    ${!!minimal && buttonModifiers.minimal(theme)};
  `}
`;

export const IconWrapper = styled.span``;
