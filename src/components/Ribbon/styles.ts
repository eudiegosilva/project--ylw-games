import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { ColorStyleProps } from 'types/global';
import { RibbonProps } from '.';

const ribbonModifiers = {
  color: (theme: DefaultTheme, colorStyle: ColorStyleProps) => css`
    background-color: ${theme.colors[colorStyle]};
    color: ${colorStyle === 'secondary'
      ? theme.colors.white
      : theme.colors.secondary};

    &::before {
      border-left-color: ${darken(0.2, theme.colors[colorStyle])};
      border-top-color: ${darken(0.2, theme.colors[colorStyle])};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `
};

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, colorStyle, size }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!size && ribbonModifiers[size](theme)}
    ${!!colorStyle && ribbonModifiers.color(theme, colorStyle)};
  `}
`;
