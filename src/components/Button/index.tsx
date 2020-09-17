import * as s from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const Button = ({
  children,
  fullWidth = false,
  icon,
  size = 'medium',
  ...rest
}: ButtonProps) => (
  <s.Container size={size} fullWidth={fullWidth} hasIcon={!!icon} {...rest}>
    {!!icon && icon}
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Container>
);

export default Button;
