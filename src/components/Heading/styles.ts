import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';

const containerModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.yellow};
    padding-left: ${theme.spacings.xxsmall};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.medium};
    position: relative;

    &::after {
      position: absolute;
      content: '';
      border-bottom: 0.5rem solid ${theme.colors.yellow};
      bottom: -1rem;
      left: 0;
      width: 5rem;
    }
  `
};

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${lineLeft && containerModifiers.lineLeft(theme)}
    ${lineBottom && containerModifiers.lineBottom(theme)}
  `}
`;
