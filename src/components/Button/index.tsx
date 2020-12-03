import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import * as s from './styles';

export type ColorStyleProps = 'primary' | 'secondary' | 'alternative';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  colorStyle?: ColorStyleProps;
  icon?: React.ReactNode;
  as?: React.ElementType;
} & ButtonTypes;

const Button: React.ForwardRefRenderFunction<s.WrapperProps, ButtonProps> = (
  {
    children,
    fullWidth = false,
    minimal = false,
    colorStyle = 'primary',
    icon,
    size = 'medium',
    ...props
  },
  ref
) => (
  <s.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    colorStyle={colorStyle}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Wrapper>
);

export default forwardRef(Button);
