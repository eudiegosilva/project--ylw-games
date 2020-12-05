import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  as?: React.ElementType;
  colorStyle?: ColorStyleProps;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  minimal?: boolean;
  size?: 'small' | 'medium' | 'large';
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<s.WrapperProps, ButtonProps> = (
  {
    children,
    colorStyle = 'primary',
    fullWidth = false,
    icon,
    minimal = false,
    size = 'medium',
    ...props
  },
  ref
) => (
  <s.Wrapper
    colorStyle={colorStyle}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    size={size}
    {...props}
  >
    {!!icon && icon}
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Wrapper>
);

export default forwardRef(Button);
