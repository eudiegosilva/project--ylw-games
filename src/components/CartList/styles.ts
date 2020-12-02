import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { tint } from 'polished';
export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`;

export const CartFooter = styled.div`
  ${({ theme }) => css`
    background-color: ${tint(0.5, theme.colors.gallery)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
    display: flex;
    justify-content: space-between;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `}
  `}
`;

export const CartTotal = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;
