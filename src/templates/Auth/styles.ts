import styled, { css } from 'styled-components';

export const AuthWrapper = styled.main`
  ${() => css``}
`;

export const BannerBlock = styled.section`
  ${() => css``}
`;

export const BannerSubtitle = styled.h3`
  ${() => css``}
`;

export const BannerFooter = styled.footer`
  ${() => css``}
`;

export const ContentBlock = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;
