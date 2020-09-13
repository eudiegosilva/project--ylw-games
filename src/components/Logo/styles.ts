import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

const containerModifier = {
  normal: () => css`
    width: 11rem;
  `,
  large: () => css`
    width: 20rem;
  `,
  hideTextOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      heigth: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .text {
        display: none;
      }
    `}
  `
};

export const Container = styled.div<LogoProps>`
  ${({ theme, textColor, size, hideTextOnMobile }) => css`
    color: ${theme.colors[textColor!]};
    ${!!size && containerModifier[size]}
    ${!!hideTextOnMobile && containerModifier.hideTextOnMobile}
  `}
`;
