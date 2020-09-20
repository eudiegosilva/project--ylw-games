import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';

export const Container = styled.footer`
  ${HeadingStyles.Container} {
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: 1fr 1fr;
    margin-top: ${theme.spacings.medium};
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr)
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.grayWeb};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const CopyrightWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grayWeb};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`;
