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
  ...rest
}: ButtonProps) => (
  <s.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    {...rest}
  >
    {!!icon && icon}
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Container>
);

export default Button;
