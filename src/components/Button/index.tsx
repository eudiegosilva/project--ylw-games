import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as s from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: React.ReactNode;
  as?: 'button' | 'a';
} & ButtonTypes;

const Button = ({
  children,
  fullWidth = false,
  minimal = false,
  icon,
  size = 'medium',
  ...props
}: ButtonProps) => (
  <s.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Wrapper>
);

export default Button;
