import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';

export const AuthWrapper = styled.main`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.section`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.black};
      opacity: 0.9;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BannerContentWrapper = styled.div``;

export const BannerContent = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    height: 100%;
    justify-content: space-between;
    grid-template-columns: 1fr;
    position: relative;
    z-index: ${theme.layers.base};

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const BannerSubtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const BannerFooter = styled.footer`
  ${({ theme }) => css`
    align-self: end;
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
  `}
`;

export const ContentBlock = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};

    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      width: 36rem;
    `}
  `}
`;
