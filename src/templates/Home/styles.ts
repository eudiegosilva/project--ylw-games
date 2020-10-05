import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as GameCardSliderStyles from 'components/GameCardSlider/styles';
import * as HighlightStyles from 'components/Highlight/styles';

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Container},
    ${GameCardSliderStyles.Container},
    ${HighlightStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlightStyles.Container} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardSliderStyles.Container} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`;

export const Container = styled.section``;

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

export const SectionNews = styled(Sections)`
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

    ${HeadingStyles.Container} {
      ${media.lessThan('medium')`
        color: ${theme.colors.white};
    `}
    }
  `}
`;

export const SectionMostPopular = styled(Sections)``;

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Container} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`;

export const SectionFreeGames = styled(Sections)``;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;
