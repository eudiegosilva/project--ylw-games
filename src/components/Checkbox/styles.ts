import styled, { css } from 'styled-components';

import { CheckboxProps } from '.';

type labelProps = Pick<CheckboxProps, 'labelColor'>;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.grayWeb};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.secondary};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary};

      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label<labelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`;