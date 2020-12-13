import styled, { css } from 'styled-components';

import { ColorStyleProps } from 'types/global';

type ColorProps = {
  color: ColorStyleProps;
};

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Title = styled.h2<ColorProps>`
  ${({ theme, color }) => css`
    color: ${color !== 'primary' ? theme.colors.secondary : theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;

export const Description = styled.p<ColorProps>`
  ${({ theme, color }) => css`
    color: ${color === 'primary' ? theme.colors.white : theme.colors.secondary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
