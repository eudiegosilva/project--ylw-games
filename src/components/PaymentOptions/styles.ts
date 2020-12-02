import styled, { css, DefaultTheme } from 'styled-components';
import { tint } from 'polished';

import * as ButtonStyles from 'components/Button/styles';

const cardItemStyles = (theme: DefaultTheme) => css`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.gallery};
  border-radius: 0.2rem;
  color: ${theme.colors.secondary};
  cursor: pointer;
  height: 5rem;
  padding: ${theme.spacings.xxsmall};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`;

export const UpperSection = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;

export const LowerSection = styled.div`
  ${({ theme }) => css`
    background-color: ${tint(0.5, theme.colors.gallery)};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;

    ${ButtonStyles.Wrapper} {
      padding-left: ${theme.spacings.xxsmall};
      padding-right: ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`;

export const PaymentCardList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardItem = styled.label`
  ${({ theme }) => css`
    ${cardItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const CardInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const AddPaymentCard = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    ${cardItemStyles(theme)};

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2rem;
    }
  `}
`;
