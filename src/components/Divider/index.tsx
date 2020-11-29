import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Divider = styled.hr`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};
    height: 0.1rem;
    background: ${theme.colors.gray};
    opacity: 0.4;
    border: none;

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
    `}
  `}
`;
