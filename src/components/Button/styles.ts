import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ButtonStyleProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  'size' | 'fullWidth'
>;

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
    align-items: center;
    display: inline-flex;
    justify-content: center;
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Container = styled.button<ButtonStyleProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: ${theme.colors.yellow};
    border-radius: ${theme.border.radius};
    border: none;
    color: ${theme.colors.blackEerie};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};

    ${!!size && buttonModifiers[size](theme)};
    ${!!fullWidth && buttonModifiers.fullWidth};
    ${hasIcon && buttonModifiers.withIcon(theme)};
  `}
`;

export const IconWrapper = styled.span``;
