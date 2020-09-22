import * as s from './styles';

export type RibbonColors = 'primary' | 'secondary';
export type RibbonSizes = 'small' | 'medium';

export type RibbonProps = {
  children: React.ReactNode;
  color?: RibbonColors;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  color = 'primary',
  size = 'medium'
}: RibbonProps) => (
  <s.Container color={color} size={size}>
    {children}
  </s.Container>
);

export default Ribbon;
