import styled, { css, DefaultTheme } from 'styled-components';

import { TextFieldProps } from '.';

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>;
type WrapperProps = Pick<TextFieldProps, 'disabled'> & {
  error?: boolean;
};

const textFieldModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${IconWrapper} {
      cursor: not-allowed;
      color: ${theme.colors.grayWeb};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.error};
    }
    ${IconWrapper},
    ${Label} {
      color: ${theme.colors.error};
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && textFieldModifiers.disabled(theme)}
    ${error && textFieldModifiers.error(theme)}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.grayLight};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.grayLight};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xxsmall};
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const IconWrapper = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.grayWeb};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
