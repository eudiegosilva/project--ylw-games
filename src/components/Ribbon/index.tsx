import * as s from './styles';

export type ColorStyleProps = 'primary' | 'secondary' | 'alternative';
export type RibbonSizes = 'small' | 'medium';

export type RibbonProps = {
  children: React.ReactNode;
  colorStyle?: ColorStyleProps;
  size?: RibbonSizes;
};

const Ribbon = ({
  children,
  colorStyle = 'primary',
  size = 'medium'
}: RibbonProps) => (
  <s.Wrapper colorStyle={colorStyle} size={size}>
    {children}
  </s.Wrapper>
);

export default Ribbon;
