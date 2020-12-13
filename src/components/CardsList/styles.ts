import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${() => css``}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
    padding: 1.3rem ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`;
