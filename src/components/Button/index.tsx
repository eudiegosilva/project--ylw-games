import * as s from './styles';

export type ButtonProps = {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};
const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <s.Container size={size}>
    {!!children && <s.IconWrapper>{children}</s.IconWrapper>}
  </s.Container>
);

export default Button;
