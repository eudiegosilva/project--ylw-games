import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps, LineColorProps } from '.';

export const headingModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColorProps) => css`
    margin-bottom: ${theme.spacings.medium};
    position: relative;
    &::after {
      position: absolute;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      bottom: -1rem;
      left: 0;
      width: 5rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && headingModifiers.lineLeft(theme, lineColor!)};
    ${lineBottom && headingModifiers.lineBottom(theme, lineColor!)};
    ${size && headingModifiers[size](theme)};
  `}
`;
