import styled, { css } from 'styled-components';
import { tint } from 'polished';

import * as TextFieldStyles from 'components/TextField/styles';
import * as ButtonStyles from 'components/Button/styles';

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.primary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${tint(0.2, theme.colors.primary)};
        border-bottom: 0.1rem solid ${tint(0.2, theme.colors.primary)};
      }
    }
  `}
`;
