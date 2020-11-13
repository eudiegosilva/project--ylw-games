import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as HighlightStyles from 'components/Highlight/styles';

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.spacings.large} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-top: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.white};
      clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
    `}

    ${HeadingStyles.Wrapper} {
      ${media.lessThan('medium')`
        color: ${theme.colors.white};
    `}
    }
  `}
`;

export const SectionUpcoming = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;
