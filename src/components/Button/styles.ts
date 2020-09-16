import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type ButtonStyleProps = Pick<ButtonProps, 'size'>;

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
  `
};

export const Container = styled.button<ButtonStyleProps>`
  ${({ theme, size }) => css`
    background: ${theme.colors.yellow};
    color: ${theme.colors.blackEerie};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!size && buttonModifiers[size](theme)};
  `}
`;

export const IconWrapper = styled.span``;
