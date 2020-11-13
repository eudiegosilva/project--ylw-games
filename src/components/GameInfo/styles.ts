import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

    ${RibbonStyles.Wrapper} {
      right: -1rem;

      &:before {
        border-right-width: 1rem;
      }
    }

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};

        &:before {
          border: none;
        }
      }
    `}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.grayWeb};
    margin-bottom: ${theme.spacings.small};
    text-align: justify;

    ${media.greaterThan('small')`
      max-width: 70%;
    `}
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      width: 100%;
      margin-bottom: 0;

      & + button {
        color: ${theme.colors.secondary};
      }
    }

    ${media.greaterThan('medium')`
      flex-direction: row-reverse;

      > button {
        width: initial;
        margin-bottom: 0;
      }
    `}
  `}
`;
