import * as s from './styles';

import { ColorStyleProps } from 'types/global';

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
