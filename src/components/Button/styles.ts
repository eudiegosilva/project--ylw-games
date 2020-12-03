import styled, { css, DefaultTheme } from 'styled-components';
import { tint } from 'polished';

import { ButtonProps } from '.';

type MinimalProps = boolean | undefined;

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal' | 'model'>;

const buttonModifiers = {
  primary: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.primary};
    color: ${minimal ? theme.colors.primary : theme.colors.secondary};
    &:hover {
      background: ${minimal ? 'none' : tint(0.2, theme.colors.primary)};
      color: ${minimal
        ? tint(0.2, theme.colors.primary)
        : theme.colors.secondary};
    }
  `,
  secondary: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.secondary};
    color: ${minimal ? theme.colors.secondary : theme.colors.white};
    &:hover {
      background: ${minimal ? 'none' : tint(0.2, theme.colors.secondary)};
      color: ${minimal
        ? tint(0.2, theme.colors.secondary)
        : theme.colors.white};
    }
  `,
  alternative: (theme: DefaultTheme, minimal: MinimalProps) => css`
    background: ${minimal ? 'none' : theme.colors.alternative};
    color: ${minimal ? theme.colors.alternative : theme.colors.secondary};
    &:hover {
      background: ${minimal ? 'none' : tint(0.2, theme.colors.alternative)};
      color: ${minimal
        ? tint(0.2, theme.colors.alternative)
        : theme.colors.secondary};
    }
  `,
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
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal, model, disabled }) => css`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    border-radius: ${theme.border.radius};
    border: none;
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    transition: background 0.3s;
    text-decoration: none;

    ${!!size && buttonModifiers[size](theme)};
    ${!!fullWidth && buttonModifiers.fullWidth};
    ${!!hasIcon && buttonModifiers.withIcon(theme)};
    ${!!model && buttonModifiers[model](theme, minimal)};
    ${disabled && buttonModifiers.disabled()};
  `}
`;

export const IconWrapper = styled.span``;
